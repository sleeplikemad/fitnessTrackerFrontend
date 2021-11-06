import React from 'react';
import { useLocation } from "react-router-dom";

const SingleRoutineActivity = ({ }) => {
    const pageLocation = useLocation();
    const { activity, name } = pageLocation.state;
    
    return (
        <div>
            <h2>Activities for "{name}"</h2>
            {
            activity.length ?
                activity.map(e => { // consider making "name" a clickable link that links to the generic activity.  will need activity id.
                    return (
                        <div key={`routine act ${e.id}`}>
                            <h3>{e.name}</h3> 
                            <p>{e.description}</p>
                            <p>
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