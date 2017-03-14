import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TaskManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };
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

    handleTimerButton(e){
        e.preventDefault();

        var taskId = $(e.target).parents('.task').data('task');
        var newTasks = this.state.tasks;
        var clickTime = new Date().getTime();

        //convert to 0-index
        taskId--;

        //Set Task Times before states so no information is lost
        newTasks = this.setTaskTimes(taskId, clickTime, newTasks);
        newTasks = this.setTaskStates(taskId, newTasks);
        
        
        this.setState({tasks: newTasks});
    }

    setTaskTimes(taskId, clickTime, tasks){

        //Case 1, task was paused
        if(tasks[taskId].state === 'paused'){
            tasks[taskId].startTime = clickTime;
            tasks[taskId].stopTime = null;
        }
        //Case 2, task was playing all ready
        else if(tasks[taskId].state === 'play'){

            //Smooth Sailing -- if there's an error at this part, do nothing.
            if(tasks[taskId].startTime && tasks[taskId].stopTime === null){
                tasks[taskId].stopTime = clickTime;
                tasks = this.updateTimerDuration(taskId, tasks);
            }
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

    updateTimerDuration(taskId, tasks){

        if(tasks[taskId].startTime && tasks[taskId].stopTime){

            console.log(tasks[taskId].stopTime - tasks[taskId].startTime);
        }

        return tasks;
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
                            <div className="hour" data-task={ task.id }><span>{ task.hour }</span></div>
                            <div className="colon"> 
                                <span className={"animation-colon "+task.state}>:</span>
                            </div>
                            <div className="minute" data-task={ task.id }><span>{ task.minute }</span></div>
                        </div>
                        <div className="timer-btn" data-state={ task.state } data-task={ task.id } onClick={(event) => {this.handleTimerButton(event)}}>{this.renderTimerButton(task.state)}</div>
                    </div>
                );
            });
        }
    }

    renderTimerButton(state){

        if(state === "play"){
            return(
                <div className="i icon-play"></div>
            );        
        }
        else if(state === "paused"){
            return (
                <div className="i icon-pause"></div>
            );
        }
    }

    render() {
        return (
            <div className="tasks-list">
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