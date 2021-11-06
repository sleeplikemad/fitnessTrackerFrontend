import React from 'react';
import { useLocation } from "react-router-dom";

const SingleRoutineActivity = ({ allRoutines }) => {
    const pageLocation = useLocation();
    const { activity, name } = pageLocation.state;
    
    return (
        <div className="single-routine-activity-main">
            <h2>Activities for {name}</h2>
            {
            activity.length ?
                activity.map((e, idx) => {
                    return (
                        <div key={`routine act ${e.id}`}
                        className={idx%2===0 ? "routine-activity-card blue" : "routine-activity-card grey"}>
                            <h3>{e.name}</h3>
                            <p>{e.description}</p>
                            <p className="routine-activity-count">
                            <span>{e.count} reps</span> | <span>{e.duration} min.</span>
                            </p>
                        </div>
                    )
                })
                : <p>There are no activities for this routine.</p>
        }</div>
    )
}

export default SingleRoutineActivity;