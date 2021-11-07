import React from 'react';
import { deleteRoutine } from '../api';

const DeleteRoutineButton = ({ routineId, setAllRoutines }) => {
    return (
        <button
            className="delete-button"
            onClick={async () => {
                try {
                    await deleteRoutine(routineId);
                  
                    setAllRoutines(prevRoutines=>(prevRoutines.filter(routine=>routine.id !== routineId)));
                } catch (err) {
                    console.log(err);
                }
            }}>
            <span className="material-icons">delete</span> 
        </button>
    )
}

export default DeleteRoutineButton;