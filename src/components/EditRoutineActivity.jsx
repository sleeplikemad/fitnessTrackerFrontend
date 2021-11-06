import React, { useState } from 'react';
import { updateRoutineActivity} from '../api';
import { useLocation, useHistory } from "react-router-dom";


const EditRoutineActivity = ({ isLoggedIn, allActivities, setAllActivities }) => {
    const pageLocation = useLocation()
    const {
        routineActivityId,
        routineName,
        name,
        description,
        duration,
        count} = pageLocation.state;

    const [newDuration, setNewDuration] = useState(duration);
    const [newCount, setNewCount] = useState(count);

    const history = useHistory();

    const handleClick = () => {
        history.push('/myroutines');
    }

    return (
        <div className="create-routine-activity-main-container">
            <h2>Edit <span className="italicized">{name} </span> from <span className='bold'>{routineName}</span></h2>
            <p>
                <span>Description: "{description}"</span>
            </p>
            <form
                className="create-routine-activity-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        await updateRoutineActivity(routineActivityId, newCount, newDuration);
                        setNewDuration('');
                        setNewCount('');
                        handleClick();
                        
                    } catch (err) {
                        console.log(err);
                    }
                }}>

                {/* DURATION INPUT */}
                <label htmlFor="routine-activity-duration">Duration(in minutes): </label>
                <input
                    type="number"
                    name="routine-activity-duration"
                    id="routine-activity-duration"
                    value={newDuration}
                    min="1"
                    onChange={(e) => setNewDuration(e.target.value)}
                    />
                {/* COUNT INPUT */}
                <label for="routine-activity-count">Count(in reps): </label>
                <input
                    type="number"
                    name="routine-activity-count"
                    id="routine-activity-count"
                    value={newCount}
                    min="1"
                    onChange={(e) => setNewCount(e.target.value)}
                    />

                <button>Submit Changes to Activity</button>
            </form>
        </div>
    )
}

export default EditRoutineActivity;