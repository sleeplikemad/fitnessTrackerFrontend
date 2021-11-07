import React, { useState } from 'react';
import { addRoutine } from '../api';
import logo from '../images/ftLogoWhite.png';

const CreateRoutine = ({ setAllRoutines }) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);
  
    return (
        <div className="create-activity-main-container">
            <img className='create-logo' src={logo} />
            <h2>Create a new routine </h2>
            <form
                className="create-routine-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        if (!name || !goal) {
                            alert('Please be sure to enter a name and goal');
                        } else {
                            const newRoutine = await addRoutine(name, goal, isPublic);
                            setName('');
                            setGoal('');
                            setIsPublic(false);
                      
                            setAllRoutines(prevRoutines =>( [...prevRoutines, newRoutine]));
                        }
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