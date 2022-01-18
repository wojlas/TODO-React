import React, {useState, useEffect} from "react";

export default function SingleOperation(props) {
    const {description, operationID, taskTime, onSetTime, onTimeSwitch, onRemoveOperation} = props;
    const [timeSwitch, setTimeSwitch] = useState(false);
    const [operationTime, setOperationTime] = useState(null);
    const [timeFormat, setTimeFormat] = useState('');

    const timeToStr = (time)=> {
      let hours = parseInt((time/60), 10);
      let minutes = (time - (hours*60))

      if (time % 60 === 0) { return (`${hours}godz`)};
      if (time > 60) { return (`${hours}godz ${minutes}min`)};
      if (time < 60) { return (`${minutes}min`)};
    };

    useEffect(()=> {
      setOperationTime(taskTime);
      setTimeFormat(timeToStr(taskTime));
    }, []);

    const taskTimeHandler = (e)=> {
      e.preventDefault();
      onSetTime(operationID, description, e.target.elements[0].value);
      setOperationTime(e.target.elements[0].value);
      setTimeFormat(timeToStr(e.target.elements[0].value))
      setTimeSwitch(false);
    };

    const removeOperation = ()=> {
      onRemoveOperation(operationID);
    };


    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {description}
              {operationTime > 0 ? (<span className="badge badge-success badge-pill ml-2">
                {timeFormat}
              </span>) : ''}
            </div>
    
            {/* <!-- div wyświetlany domyślnie, znika po wciśnięciu "Add time" --> */}
            {timeSwitch === false ? (<div>
              {/* <!-- Przycisk widoczny tylko jeżeli status zadania jest "open" --> */}
              <button className="btn btn-outline-success btn-sm mr-2" onClick={()=>setTimeSwitch(true)} >
                Add time
                <i className="fas fa-clock ml-1"></i>
              </button>
    
              <button className="btn btn-outline-danger btn-sm" onClick={()=>removeOperation()}><i className="fas fa-trash"></i></button>
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