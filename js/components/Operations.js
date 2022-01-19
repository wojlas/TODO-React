import React, {useState, useEffect} from 'react';
import SingleOperation from './SingleOperation';

// Component render opderations in each task. Data is sending in props 
function Operation(props) {
    const {taskID, myOperation, status, onSetTime, onRemoveOperation} = props;

    const [timeSwitch, setTimeSwitch] = useState(false);

    const setTime = (id, description, time)=> {
        onSetTime(id, description, time);
    }

    const removeOperation = (id)=> {
        onRemoveOperation(id);
    }



    return (
        <>{myOperation.map(operation=> {
          return (<SingleOperation key={operation.id} description={operation.description} operationID={operation.id} timeSwitch={timeSwitch}
           taskTime={operation.timeSpent} onSetTime={setTime} onRemoveOperation={removeOperation}/> )})}
        </>
    )
}

export default Operation;