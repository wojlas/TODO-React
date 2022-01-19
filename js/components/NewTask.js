import React, {useState, useEffect} from "react";
import {addTask} from '../api/new_task'

// Component render form to add new task 
function NewTask(props) {
    const [task, setTask] = useState({title: '', description: '', status: 'open'});

    const addTaskHandler = (event) => {
        const {name, value} = event.target;
        setTask(prevState=> {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const sendTask = (event)=> {
        event.preventDefault();
        addTask(task, (data) => {
            props.onNewTask(task);
        })
    }

    return (
        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">New task</h1>
                <form onSubmit={sendTask}>
                    <div className="form-group">
                    <input type="text"
                            className="form-control"
                            name="title"
                            placeholder="Title"
                            value = {task.title}
                            onChange={addTaskHandler}/>
                    </div>
                    <div className="form-group">
                    <input type="text"
                            className="form-control"
                            name="description"
                            placeholder="Description"
                            value={task.description}
                            onChange={addTaskHandler}/>
                    </div>
                    <button className="btn btn-info">
                    Add task
                    <i className="fas fa-plus-circle ml-1"></i>
                    </button>
                </form>
        </div>
    </div>
    )
}

export default NewTask;