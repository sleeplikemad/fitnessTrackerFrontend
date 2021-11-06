import React, { useState } from 'react';
import { addActivityToRoutine } from '../api';
import { useLocation, useHistory } from "react-router-dom";


const CreateRoutineActivity = ({ allActivities }) => {
    const [activityId, setActivityId] = useState(allActivities[0].id);
    const pageLocation = useLocation();
    const {
        routineId,
        routineName,
        routineGoal,
        rIsPublic } = pageLocation.state;
    const [duration, setDuration] = useState('');
    const [count, setCount] = useState("");

    const history = useHistory();

    const handleClick = () => {
        history.push('/myroutines');
    }

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
                        if (!activityId || !duration || !count) {
                            alert('Please be sure to select a name and enter a duration and a count');
                        }
                        await addActivityToRoutine(routineId, activityId, count, duration);
                        setActivityId('');
                        setDuration('');
                        setCount('');
                        handleClick();
                    } catch (err) {
                        console.log(err);
                    }
                }}>
                {/* NAME INPUT */}
                <label htmlFor="routine-activity-name">Choose an activity:</label>
                <select id="routine-activity-name" name="routine-activity-name" onChange={(e) => setActivityId(e.target.value)}>
                    {
                        allActivities.map((e) => {
                            return (
                                <option value={e.id}>{e.name}</option>
                            )
                        })
                    }
                </select>

                {/* DURATION INPUT */}
                <label htmlFor="routine-activity-duration">Duration(in minutes): </label>
                <input
                    type="number"
                    name="routine-activity-duration"
                    id="routine-activity-duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    placeholder="0" />
                {/* COUNT INPUT */}
                <label htmlFor="routine-activity-count">Count(in reps): </label>
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