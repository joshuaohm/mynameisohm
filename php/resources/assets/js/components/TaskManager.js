import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 

class TaskManager extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: []
        }
    }

    componentDidMount() {
        /*
      fetch('/api/tasks')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({ users });
      });*/

        var tasks = [
            {
                "id":0,
                "title":"test",
                "hour":1,
                "minute":24,
                "state": "paused"
            },
            {
                "id":1,
                "title":"test",
                "hour":2,
                "minute":36,
                "state": "paused"
            }
        ];

        this.setState({tasks});
    }

    renderTasks() {
        return this.state.tasks.map(task => {
            return (
                <div className="task" key={ task.id }>
                    <div className="title"><span>{ task.title }</span></div>
                    <div className="time">
                        <div className="hour"><span>{ task.hour }</span></div>
                        <div className="colon"><span>:</span></div>
                        <div className="minute"><span>{ task.minute }</span></div>
                    </div>
                    <div className="timer-btn" data-state={ task.state }><span>{this.renderTimerButton(task.state)}</span></div>
                </div>
            );
        })
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