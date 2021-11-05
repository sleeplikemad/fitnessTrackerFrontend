import React, { useState, useEffect } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { getMyID } from '../api';
import { DeleteRoutineButton } from './';

const SingleRoutine = ({ allRoutines, setAllRoutines }) => {
    const [userId, setUserId] = useState('');

    useEffect(() => {
        async function getUserInfo() {
            try {
                const { id } = await getMyID();
                setUserId(id);
            } catch (err) {
                console.log(err);
            }
        }
        getUserInfo();
    }, []);

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

                                {
                                    userId === e.creatorId
                                        ? <div className="edit-delete"> 
                                        <Link
                                            className="edit-routine-link"
                                            to={{
                                                pathname: "/editroutine",
                                                state: {
                                                    routineId: e.id,
                                                    routineName: e.name,
                                                    routineGoal: e.goal,
                                                    rIsPublic: e.isPublic
                                                }
                                            }}>
                                            <button>
                                                <span class="material-icons">edit</span>
                                            </button>
                                        </Link>
                                            <DeleteRoutineButton
                                                routineId={e.id}
                                                allRoutines={allRoutines}
                                                setAllRoutines={setAllRoutines}
                                            />
                                        </div>
                                        : null
                                }
                            </div>
                        )
                    })
                    : null
            }

        </div>
    )
}

export default SingleRoutine;