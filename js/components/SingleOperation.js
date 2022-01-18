import React, {useState, useEffect} from "react";

export default function SingleOperation(props) {
    const {description, operationID, taskTime, onSetTime, onTimeSwitch} = props;
    const [timeSwitch, setTimeSwitch] = useState(false);

    const taskTimeHandler = (e)=> {
      e.preventDefault();
      onSetTime(operationID, description, e.target.elements[0].value);
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {description}
              {taskTime > 0 ? (<span className="badge badge-success badge-pill ml-2">
                {taskTime}min
              </span>) : ''}
            </div>
    
            {/* <!-- div wyświetlany domyślnie, znika po wciśnięciu "Add time" --> */}
            {timeSwitch === false ? (<div>
              {/* <!-- Przycisk widoczny tylko jeżeli status zadania jest "open" --> */}
              <button className="btn btn-outline-success btn-sm mr-2" onClick={()=>setTimeSwitch(true)} >
                Add time
                <i className="fas fa-clock ml-1"></i>
              </button>
    
              <button className="btn btn-outline-danger btn-sm"><i className="fas fa-trash"></i></button>
            </div>) : (
                <form onSubmit={taskTimeHandler}>
                <div className="input-group input-group-sm">
                  <input type="number"
                         className="form-control"
                         placeholder="Spent time in minutes"
                         style={{width: '12rem'}}/>
                  <div className="input-group-append">
                    <button className="btn btn-outline-success"><i className="fas fa-save"></i></button>
                    <button className="btn btn-outline-dark" onClick={()=> setTimeSwitch(false)}><i className="fas fa-times false"></i></button>
                  </div>
                </div>
              </form>
            ) }
          </li>
          )
}