import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from './Modal';
import Confirm from './Confirm';

class TaskManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };
    }

    componentDidMount(){

        if(userId !== null){
            fetch('/api/tasks/'+userId)
                .then(response => {
                    return response.json();
                })
                .then(tasks => {

                    tasks = this.assignColors(tasks);
                    tasks = this.parseTimes(tasks);
                    
                    this.setState({tasks});
              });
        }

        
    }

    assignColors(tasks){

        var ci = 1;

        for(var i = 0; i < tasks.length; i++){

            tasks[i].color = ci;

            if(ci === 7){
                ci = 1;
            }
            else{
                ci++;
            }
        }

        return tasks;
    }

    parseTimes(tasks){

        for(var i = 0; i < tasks.length; i++){



            tasks[i].hour = Math.floor(tasks[i].duration / 3600);
            tasks[i].minute = Math.floor((tasks[i].duration % 3600) / 60);
        
            if(tasks[i].hour < 10){
                tasks[i].hour = "0"+tasks[i].hour;
            }

            if(tasks[i].minute < 10){
                tasks[i].minute = "0"+tasks[i].minute;
            }
        }

        return tasks;
    }

    getActiveTask(){

        for(var i = 0; i < this.state.tasks.length; i++){
            if(this.state.tasks[i].state === 'play'){
                return i;
            }
        }

        return false;
    }

    handleTimerButton(e){

        e.preventDefault();

        var taskId = $(e.target).parents('.task').data('task');
        var newTasks = this.state.tasks;

        
        var clickTime = new Date().getTime();

        //convert to 0-index
        taskId--;

        this.updateTasks(true, taskId, clickTime, newTasks);
    }



    handleSubmitButton(e){

        e.preventDefault();

        var self = this;
        var taskId = $(e.target).data('task');

        //convert to 0-index
        taskId--;

        var confirm = function(message, options) {
          var cleanup, component, props, wrapper;
          if (options == null) {
            options = {};
          }
          props = $.extend({
            message: message
          }, options);
          wrapper = document.body.appendChild(document.createElement('div'));
          component = ReactDOM.render(<Confirm {...props}/>, wrapper);
          cleanup = function() {
            ReactDOM.unmountComponentAtNode(wrapper);
            return setTimeout(function() {
              return wrapper.remove();
            });
          };
          return component.promise.always(cleanup).promise();
        };

        return confirm('Are you sure', {
            description: 'Would you like to submit these hours?',
            confirmLabel: 'Yes',
            abortLabel: 'No'
        }).then((function(_this) {
            return function() {
                self.submitTime(taskId, self.state.tasks[taskId].duration);
            };
        })(this));
    }

    handleDeleteButton(e){

    }

    updateTasks(wasClicked, taskId, currTime, newTasks){

        if(wasClicked){
            newTasks = this.setTaskStates(taskId, newTasks);
        }
        
        newTasks = this.setTaskTimes(taskId, currTime, newTasks);
        newTasks = this.assignColors(newTasks);
        newTasks = this.parseTimes(newTasks);

        this.setState({tasks: newTasks}, function(){

            if(wasClicked){
                this.startTimerInterval(taskId);
            }
        });
    }

    setTaskTimes(taskId, currTime, tasks){

        //Case 1, task was playing all ready, still playing
        if(tasks[taskId].state === 'play' && Number.isInteger(tasks[taskId].startTime)){

            //Smooth Sailing -- if there's an error at this part, do nothing.
            if(tasks[taskId].startTime && !Number.isInteger(tasks[taskId].stopTime)){
                tasks[taskId].stopTime = currTime;
                tasks = this.updateTimerDuration(true, taskId, tasks);
            }
        }
        //Case 2, task was just started
        else if(tasks[taskId].state === 'play' && !Number.isInteger(tasks[taskId].startTime) && !Number.isInteger(tasks[taskId].stopTime)){
            tasks[taskId].startTime = currTime;
        }
        //Case 3, task was just paused
        else if(tasks[taskId].state === 'paused' && Number.isInteger(tasks[taskId].startTime) && !Number.isInteger(tasks[taskId].stopTime)){
            tasks[taskId].stopTime = currTime;
            tasks = this.updateTimerDuration(false, taskId, tasks);
        }

        return tasks;
    }

    setTaskStates(taskId, tasks){

        if(tasks.length > 0){
            if(tasks[taskId].state === 'play'){
                tasks[taskId].state = 'paused';
            }
            else if(tasks[taskId].state === 'paused'){
                tasks = this.pauseAllTasks(tasks);
                tasks[taskId].state = 'play';
            }
        }

        return tasks;
    }

    pauseAllTasks(taskList){
        for(var i = 0; i < taskList.length; i++){
            taskList[i].state = 'paused';
        }

        return taskList;
    }

    updateTimerDuration(stillPlaying, taskId, tasks){

        if(tasks[taskId].startTime && tasks[taskId].stopTime){
            
            var difference = Math.floor((tasks[taskId].stopTime - tasks[taskId].startTime)/1000);
            tasks[taskId].duration = parseInt(tasks[taskId].duration) + difference;

            if(stillPlaying){
                tasks[taskId].startTime = tasks[taskId].stopTime;
                tasks[taskId].stopTime = null;
            }
            else{
                tasks[taskId].startTime = null;
                tasks[taskId].stopTime = null;
            }
            
        }

        return tasks;
    }

    startTimerInterval(taskId){

        if(taskId === this.getActiveTask()){

            var self = this;
            var newTasks = self.state.tasks;
            var currTime = new Date().getTime();

            //The amount of time (in seconds) remaining until the timer should update visually
            var updateTime = 60 - (newTasks[taskId].duration % 60);

            setTimeout(function(){
                self.updateTasks(false, taskId, currTime+(updateTime*1000), newTasks);
                self.startTimerInterval(taskId);
            },updateTime*1000);
        }
    }

    checkForActiveTasks(){

        for(var i = 0; i < this.state.tasks.length; i++){
            if(this.state.tasks[i].state === 'play'){
                return true;
            }
        }

        return false;
    }

    submitTime(taskId, duration){

        console.log('task: '+taskId+" duration: "+duration);
    }

    renderTasks() {

        if(this.state.tasks.length === 0 || this.state.tasks == null){
            return (<div></div>);
        }
        else{

            return this.state.tasks.map(task => {
                return (
                    <div className={ "task color-"+task.color } key={ task.id } data-task={ task.id }>
                        <div className="title" data-task={ task.id }><span>{ task.title }</span></div>
                        <div className="time">
                            <div className="time-wrapper">
                            <div className="hour" data-task={ task.id }><span>{ task.hour }</span></div>
                                <div className="colon"> 
                                    <span className={"animation-colon "+task.state}>:</span>
                                </div>
                                <div className="minute" data-task={ task.id }><span>{ task.minute }</span></div>
                            </div>
                        </div>
                        <div className="buttonHolder">
                            <div className="upload-btn icon-upload-cloud" data-task={task.id} onClick={(event) => {this.handleSubmitButton(event)}}></div>
                            <div className="timer-btn" data-state={ task.state } data-task={ task.id } onClick={(event) => {this.handleTimerButton(event)}}>{this.renderTimerButton(task.state)}</div>
                            <div className="delete-btn icon-trash" data-task={task.id} onClick={(event) => {this.handleDeleteButton(event)}}></div>
                        </div>
                    </div>
                );
            });
        }
    }

    renderTimerButton(state){

        if(state === "play"){
            return(
                <div className="icon-pause"></div>
            );        
        }
        else if(state === "paused"){
            return (
                <div className="icon-play"></div>
            );
        }
    }

    render() {
        return (
            <div className="tasks-list" id="main-window">
                <div className="add-task">+</div>
                { this.renderTasks() }
            </div>
        );
    }
}

export default TaskManager;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console 
if (document.getElementById('task-window')) {
    ReactDOM.render(<TaskManager />, document.getElementById('task-window'));
}