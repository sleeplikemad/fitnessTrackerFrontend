import React from 'react';
import { deleteRoutine } from '../api';

const DeleteRoutineButton = ({ routineId, allRoutines, setAllRoutines }) => {
    return (
        <button
            className="delete-button"
            onClick={async () => {
                try {
                    await deleteRoutine(routineId);
                    const filteredRoutines = allRoutines.filter(routine => {
                        if (routine.id !== routineId) {
                            return routine;
                        }
                    });
                    setAllRoutines(filteredRoutines);
                } catch (err) {
                    console.log(err);
                }
            }}>
            <span className="material-icons">delete</span> 
        </button>
    )
}

export default DeleteRoutineButton;