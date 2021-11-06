import React, { useState } from 'react';
import { addRoutine } from '../api';

const CreateRoutine = ({ allRoutines, setAllRoutines, isLoggedIn }) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);

    return (
        <div className="create-routine-main-container">
            <h2>Create a new routine </h2>
            <form
                className="create-routine-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                       if (!name || !goal){
                           alert('Please be sure to enter a name and goal')
                       }
                       
                        const newRoutine = await addRoutine(name, goal, isPublic);
                        setName('');
                        setGoal('');
                        setIsPublic(false);

                        const allRoutinesCopy = allRoutines.slice();
                        allRoutinesCopy.push(newRoutine);
                        setAllRoutines(allRoutinesCopy);
                        window.location.reload(); //reloads page to populate user's routines upon clicking create

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
                        onChange={(e) => setIsPublic(true)}
                    />
                    <p>Make this routine public?</p>
                </label>
                <button>Create Routine</button>
            </form>
        </div>
    )
}

export default CreateRoutine;