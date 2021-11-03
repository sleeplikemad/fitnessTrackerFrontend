import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { SingleRoutineActivity } from './';

const SingleRoutine = ({ allRoutines }) => {
    const [routineActivity, setRoutineActivity] = useState([])
    return (
        <div>
            {
                allRoutines.length ?
                    allRoutines.map(e => {

                        return (
                            <>
                                <div key={`routine ${e.name}${e.id}`} className="single-routine-card">
                                    <h2 className="single-routine-title">{e.name}</h2>
                                    <p>{e.goal}</p>
                                    <p><span className="single-routine-username">{e.creatorName}</span></p>
                                    <Link
                                        className="routine-activity-link"
                                        to="/routines/activities"
                                        onClick={() => { setRoutineActivity(e.activities) }}>
                                        Let's Go!</Link>
                                </div>
                            </>
                        )
                    })
                    : null
            }
            <Switch>
                <Route exact path="/routines/activities">
                    <div className="single-ra-main-container">
                        <SingleRoutineActivity
                            allRoutines={routineActivity} />
                    </div>
                </Route>
            </Switch>
        </div>
    )
}

export default SingleRoutine;