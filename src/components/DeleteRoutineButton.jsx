import React from 'react';
import { deleteRoutine } from '../api';
import {useHistory} from 'react-router-dom'

const DeleteRoutineButton = ({ routineId, allRoutines, setAllRoutines }) => {

    const handleClick = () => {
        //unfinished.  figure out reload
    }

    return (
        <button
            className="delete-button"
            onClick={async () => {
                try {
                    await deleteRoutine(routineId);
                    const filteredRoutines = allRoutines.filter(routine => {
                        if (routine.id !== routineId) {
                            return routine
                        }
                    });
                    setAllRoutines(filteredRoutines);
                    handleClick();
                } catch (err) {
                    console.log(err);
                }
            }}>
            <span className="material-icons">delete</span> 
        </button>
    )
}

export default DeleteRoutineButton;