import React, {useState, useEffect} from "react";
import Operations from './Operations';
import NewOperation from "./NewOperation";
import {finishTask} from '../api/finish_task';
import {getOperations} from '../api/operations';
import {removeTask} from '../api/remove_task';

function Task(props) {
  const [addForm, setAddForm] = useState(false);
  const [operations, setOperations] = useState([]);

    const {id, title, description, status, onTaskFinish, onTaskRemove} = props.task;

    const finishTaskHandler = ()=> {
      finishTask(id, {
        title: title,
        description: description,
        status: "closed"
      }, onTaskFinish(id))
    };

    getOperations(id, (data)=> {
      setOperations(data);
    });

    const removeTaskHandler = ()=> {
      removeTask(id, (data)=> {
        ()=> onTaskRemove(id);
      })
    };

    const newOperationHandler = (data)=> {
      setOperations(prevState=> [...prevState, data]);
      setAddForm(false)
    }

    return (
        <section className="card mt-5 shadow-sm">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div>
            <h5>{title}</h5>
            <h6 className="card-subtitle text-muted">{description}</h6>
          </div>
    
    
          <div>
            {/* <!--
              Przyciski "Add operation" i "Finish" mają być widoczne
              tylko jeżeli status zadania jest "open"
            --> */}
            {status === 'open' ? (<>
            <button className="btn btn-info btn-sm mr-2" onClick={()=>setAddForm(!addForm)}>
              Add operation
              <i className="fas fa-plus-circle ml-1"></i>
            </button>
    
            <button className="btn btn-dark btn-sm" onClick={finishTaskHandler}>
              Finish
              <i className="fas fa-archive ml-1"></i>
            </button> 
            </>) : ''}
            {operations.length === 0 ? (<button className="btn btn-outline-danger btn-sm ml-2" 
            onClick={removeTaskHandler}>
          <i className="fas fa-trash false"></i>
        </button>) : ''}
          </div>
        </div>
        {addForm ? <NewOperation taksID={id} onNewOperations={newOperationHandler}/> : ''}
        <ul className="list-group list-group-flush">
        <Operations taskID={id} form={addForm} status={status} myOperation={operations} />
        </ul>
        
      </section>)
}

export default Task;