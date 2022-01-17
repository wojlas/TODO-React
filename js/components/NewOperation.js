import React, {useState, useEffect} from "react";
import {addOperation} from '../api/new_operation';

export default function NewOperation(props) {
    const {taskID, onNewOperations} = props;

    const [newOp, setOp] = useState('');

    const newOperationHandler = (e)=> {
        e.preventDefault();
        const operationData = {description: newOp,
                                timeSpent: 0};
        addOperation(taskID, operationData, (data)=> {
            onNewOperations(data);
        });
        setOp('');
    }

    return (
        <div className="card-body">
            <form onSubmit={newOperationHandler}>
                <div className="input-group">
                    <input type="text"
                            className="form-control"
                            placeholder="Operation description"
                            value={newOp}
                            onChange={e=> setOp(e.target.value)}/>

                    <div className="input-group-append">
                        <button className="btn btn-info">
                        Add
                        <i className="fas fa-plus-circle ml-1"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}