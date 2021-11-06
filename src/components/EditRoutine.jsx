import React, { useState } from 'react';
import { updateRoutine } from '../api';
import { useLocation, useHistory } from "react-router-dom";

const EditRoutine = ({ allRoutines, setAllRoutines, isLoggedIn }) => {
    const pageLocation = useLocation();
    const { routineId, routineName, routineGoal, rIsPublic } = pageLocation.state;

    const [name, setName] = useState(routineName);
    const [goal, setGoal] = useState(routineGoal);
    const [isPublic, setIsPublic] = useState(rIsPublic);

    const history = useHistory();

    const handleClick = () => {
        history.push('/myroutines');
    }

    return (
        <div className="create-routine-main-container">
            { isLoggedIn
                ? <> <h2>Edit My Routine</h2>
                    <form
                        className="create-routine-form"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            try {
                                const newRoutine = await updateRoutine(
                                    routineId,
                                    name,
                                    goal,
                                    isPublic);
                                setName('');
                                setGoal('');
                                setIsPublic(false);

                                const allRoutinesCopy = allRoutines.slice();
                                allRoutinesCopy.push(newRoutine);
                                setAllRoutines(allRoutinesCopy);
                                handleClick();
                            } catch (err) {
                                console.log(err);
                            }
                        }}>

                        <input
                            type="text"
                            id="routine-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Routine Name" />

                        <textarea
                            id="routine-goal"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                            placeholder="Routine Goal"
                            rows={6} />

                        <label className="routine-checkbox">
                            <input
                                type="checkbox"
                                id="routine-isPublic"
                                value={isPublic}
                                checked={isPublic}
                                onChange={(e) => {
                                    !isPublic ? setIsPublic(true) : setIsPublic(false);
                                }}
                            />
                            <p>Make this routine public?</p>
                        </label>
                        <button>Edit My Routine</button>
                    </form>
                </>
                : <p>You must be logged in to edit a routine.</p>
            }
        </div>
    )
}

export default EditRoutine;