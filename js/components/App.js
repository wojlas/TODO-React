import React, {useState, useEffect} from "react";
import { getTasks } from "../api/tasks";
import Task from "./Task";
import NewTask from "./NewTask";
import { finishTask } from "../api/finish_task";

let i = 0;

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(()=> {
        getTasks((data)=> {
            setTasks(data);
        })
    }, []);
    
    const handleTask = (taskData) => {
        setTasks(prevState=> [...prevState,
            {title: taskData.title,
                    description: taskData.description,
                    status: taskData.status}])
    };

    const finishTask = (id) => {
        const taskCopy = [...tasks].map(task => {
            if (task.id === id) {
                task.status = 'closed';
            }

            return task;
        });
        setTasks(taskCopy);
    };

    const removeTask = (id)=> {
        const tasksCopy = [...tasks].filter(task=> task.id !== id);
        setTasks(tasksCopy);
    }

    return (
        <>
            <NewTask onNewTask={handleTask}/>
            {tasks.map(task=> {
                return <Task key={task.id ? task.id : i++} task={task} onTaskFinish={finishTask} onTaskRemove={removeTask}/>
            })}
        </>
    )

}

export default App;