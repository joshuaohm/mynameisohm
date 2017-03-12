import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 

class TaskManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        };
    }

    componentDidMount(){
        fetch('/api/tasks/'+userId)
        .then(response => {
            return response.json();
        })
        .then(tasks => {

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

            console.log(JSON.stringify(tasks));
            this.setState({tasks});
      });
    }

    handleTimerButton(e){
        e.preventDefault();
        var taskId = $(e.target).closest('.task').data('task');

        var newTasks = this.state.tasks;

        if(newTasks[taskId].state === 'play'){
            newTasks[taskId].state = 'paused';
        }
        else if(newTasks[taskId].state === 'paused'){
            newTasks = this.pauseAllTasks(newTasks);
            newTasks[taskId].state = 'play';
        }
        
        this.setState({tasks: newTasks});
    }

    pauseAllTasks(taskList){
        for(var i = 0; i < taskList.length; i++){
            taskList[i].state = 'paused';
        }

        return taskList;
    }

    renderTasks() {
        console.log('length'+this.state.tasks.length);
        if(this.state.tasks.length === 0 || this.state.tasks == null){
            return (<div></div>);
        }
        else{
            console.log('data '+JSON.stringify(this.state));
            return this.state.tasks.map(task => {
                return (
                    <div className={ "task color-"+task.color } key={ task.id } data-task={ task.id }>
                        <div className="title" data-task={ task.id }><span>{ task.title }</span></div>
                        <div className="time">
                            <div className="hour" data-task={ task.id }><span>{ task.hour }</span></div>
                            <div className="colon"><span>:</span></div>
                            <div className="minute" data-task={ task.id }><span>{ task.minute }</span></div>
                        </div>
                        <div className="timer-btn" data-state={ task.state } data-task={ task.id } onClick={(event) => {this.handleTimerButton(event)}}><span>{this.renderTimerButton(task.state)}</span></div>
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