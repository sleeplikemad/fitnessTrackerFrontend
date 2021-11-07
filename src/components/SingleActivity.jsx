import React, { useState, useEffect } from "react";
import { SingleRoutine } from './';
import { useLocation } from "react-router-dom"
import { fetchRoutinesByActivity } from "../api"

const SingleActivity = ({ }) => {
    const pageLocation = useLocation();
    const { activity } = pageLocation.state
    const [routines, setRoutines] = useState([])

    useEffect(() => {
        async function setUp() {
            const temp = await fetchRoutinesByActivity(activity.id);
            if (temp)
                setRoutines(temp);
        }
        setUp();
    }, []);


    return (
        <div className="single-activity-main">
            <div className="single-activity-title">
                <h2>Routines that use this Activity</h2>
            </div>
            <div className="single-activity-routine">
                {
                    routines.length ?
                        <SingleRoutine
                            allRoutines={routines} />
                        : <p>None... yet!</p>
                }
            </div>
        </div>
    )
}

export default SingleActivity;