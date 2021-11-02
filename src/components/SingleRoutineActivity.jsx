import React from 'react';

const SingleRoutineActivity = ({ allRoutines }) => {
    return (
        <div>{
            allRoutines.length ?
                allRoutines.map(e => {
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
                : null
        }</div>
    )
}

export default SingleRoutineActivity;