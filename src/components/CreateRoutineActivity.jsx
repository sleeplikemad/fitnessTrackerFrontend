import React, { useState } from 'react';
import { addActivityToRoutine } from '../api';
import { useLocation } from "react-router-dom";


const CreateRoutineActivity = ({ allActivities, isLoggedIn }) => {
    const [activityId, setActivityId] = useState('')
    const pageLocation = useLocation()
    const {routineId,
        routineName,
        routineGoal,
        rIsPublic} = pageLocation.state
    const [duration, setDuration] = useState('');
    const [count, setCount] = useState(false);

    return (
        <div className="create-routine-activity-main-container">
            <h2>Add activities to "{routineName}" - <span className="italicized">{rIsPublic ? "Public" : "Private"}</span></h2>
            <p>
                <span>Goal: "{routineGoal}"</span>
            </p>
            <form
                className="create-routine-activity-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                       if (!activityId || !duration || !count){
                           alert('Please be sure to select a name and enter a duration and a count')
                       }
                       
                        const newRoutineActivity = await addActivityToRoutine(routineId, activityId, duration, count);
                        setActivityId('');
                        setDuration('');
                        setCount('');
                        console.log("Submitted")

                    } catch (err) {
                        console.log(err);
                    }
                }}>
                {/* NAME INPUT */}
                <label for="routine-activity-name">Choose an activity:</label>
                <select id="routine-activity-name" name="routine-activity-name" onChange={(e) => setActivityId(e.target.value)}>
                    {
                        allActivities.map((e) => {
                            return (
                                <option value={e.id}>{e.name}</option>
                            )})
                    }
                </select>

                {/* DURATION INPUT */}
                <label for="routine-activity-duration">Duration(in minutes): </label>
                <input
                    type="number"
                    name="routine-activity-duration"
                    id="routine-activity-duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="0" />
                {/* COUNT INPUT */}
                <label for="routine-activity-count">Count(in reps): </label>
                <input
                    type="number"
                    name="routine-activity-count"
                    id="routine-activity-count"
                    value={count}
                    min="1"
                    onChange={(e) => setCount(e.target.value)}
                    placeholder="0" />

                <button>Add Activity</button>
            </form>
        </div>
    )
}

export default CreateRoutineActivity;