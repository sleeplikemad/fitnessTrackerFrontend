import React from 'react';

import { SingleRoutineActivity } from './';

//routine name, goal, creators username, list of activities for routine
//including activity name, description and duration and/or count
const SingleRoutine = ({ allRoutines }) => {
    return (
        <div>
            {
                allRoutines.length ?
                    allRoutines.map(e => {
                        console.log(e.activities, "!!!!")
                        return (
                            <>
                                <div key={`routine ${e.id}`} className="single-routine-main">
                                    <h2 className="single-routine-title">{e.name}</h2>
                                    <p>{e.goal}</p>
                                    <p><span className="single-routine-username">{e.creatorName}</span></p>
                                    <button>Lets Go!</button>
                                </div>
                                <div>
                                    <SingleRoutineActivity
                                        allRoutines={e.activities} />
                                </div>
                            </>
                        )
                    })
                    : null
            }
        </div>
    )
}

export default SingleRoutine;