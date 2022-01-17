import React, {useState, useEffect} from 'react';
import SingleOperation from './SingleOperation';

function Operation(props) {
    const {taskID, myOperation, status} = props;

    const [timeSwitch, setTimeSwitch] = useState(false);
    const [taskTime, setTaskTime] = useState(0);

    const setTime = (time)=> {
        setTaskTime(time);
    }



    return (
        <>{myOperation.map(operation=> {
          return (<SingleOperation key={operation.id} description={operation.description} timeSwitch={timeSwitch}
           taskTime={operation.taskTime} onSetTime={setTime}/> )})}
        </>
    )
}

export default Operation;