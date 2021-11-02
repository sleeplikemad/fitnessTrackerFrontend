import React from 'react';

//routine name, goal, creators username, list of activities for routine
//including activity name, description and duration and/or count
const SingleRoutine = ({ allRoutines }) => {
    return (
        <div>
            {
                allRoutines.length ?
                    allRoutines.map(e => {

                        return (
                            <div key={`routine ${e.id}`} className="single-routine">
                                <h2>{e.name}</h2>
                                <p>{e.goal}</p>
                                <p>{e.creatorName}</p>
                            </div>
                        )
                    })
                    : null
            }
        </div>
    )
}

export default SingleRoutine;