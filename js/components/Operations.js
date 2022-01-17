import React, {useState, useEffect} from 'react';
import SingleOperation from './SingleOperation';

function Operation(props) {
    const {taskID, myOperation, status} = props;

    const [timeSwitch, setTimeSwitch] = useState(false);
    const [taskTime, setTaskTime] = useState(0);
    const [operations, setOperations] = useState([]);

    useEffect(()=> {
        setOperations(myOperation);
    }, [])

    const handleForm = (time)=> {
        time.preventDefault();
        setTaskTime(time.target.elements[0].value);
        setTimeSwitch(false);
    };


    return (
        <>{operations.map(operation=> {
          return (<SingleOperation description={operation.description} timeSwitch={timeSwitch} taskTime={taskTime} onSetTime={handleForm}/> )})}
        </>
    )
}

export default Operation;