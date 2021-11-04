import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import { SingleRoutineActivity } from './';

const SingleRoutine = ({ allRoutines }) => {
    const [routineActivity, setRoutineActivity] = useState([]);
    const [row, setRow] = useState(1);
    return (
        <div className="single-routine-main-container">
            {
                allRoutines.length ?
                    allRoutines.map((e, idx) => {
                        return (
                            <div key={`routine ${e.name}${e.id}`} className="single-routine-card">
                                <h2 className="single-routine-title">{e.name}</h2>
                                <p>{e.goal}</p>
                                <p><span className="single-routine-username">{e.creatorName}</span></p>
                                <Link
                                    className="routine-activity-link"
                                    to={{
                                        pathname: "/routine_activities",
                                        state: { activity: e.activities, name: e.name },
                                    }}>
                                    Let's Go!
                                </Link>
                            </div>
                        )
                    })
                    : null
            }
            {/* <Switch>
                <Route exact path="/routine_activities">
                    <div className="single-ra-main-container">
                        {routineActivity.length
                            ? <SingleRoutineActivity
                                allRoutines={routineActivity} />
                            : <h2>There are no activities for this routine.</h2>
                        }
                    </div>
                </Route>
            </Switch> */}
        </div>
    )
}

export default SingleRoutine;