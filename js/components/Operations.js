import React, {useState, useEffect} from 'react';
import SingleOperation from './SingleOperation';

function Operation(props) {
    const {taskID, myOperation, status, onSetTime, onRemoveOperation} = props;

    const [timeSwitch, setTimeSwitch] = useState(false);
    const [taskTime, setTaskTime] = useState(0);

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