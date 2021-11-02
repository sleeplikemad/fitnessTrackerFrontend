import React, { useState } from 'react';
import { addRoutine } from '../api';

const CreateRoutine = ({ setAllRoutines }) => {
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
                        // !name ? alert('Please enter a name') : null;
                        // !goal ? alert('Please enter a goal') : null;

                        const newRoutine = await addRoutine(name, goal, isPublic);
                        setName('');
                        setGoal('');
                        setIsPublic(false);
                        setAllRoutines(newRoutine);

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
                    rows={8} />

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