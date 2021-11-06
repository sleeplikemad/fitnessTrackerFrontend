import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMyID } from '../api';
import { DeleteRoutineButton } from './';
import { images } from './RandomImage'

const SingleRoutine = ({ allRoutines, setAllRoutines }) => {
    function randomize() {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        return randomImage;
    }

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
                    allRoutines.map((e) => {
                        return (
                            <div key={`routine ${e.name}${e.id}`} className="single-routine-card">
                                <img className="test-image" src={randomize()} />
                                <div className="test-container">
                                    <h2 className="single-routine-title">{e.name}</h2>
                                    <p>{e.goal}</p>
                                    <Link
                                        className="single-routine-username"
                                        to={{
                                            pathname: `/routinesby/${e.creatorName}`,
                                            state: { creatorName: e.creatorName }
                                        }}
                                    >{e.creatorName}
                                    </Link>
                                    <Link
                                        className="routine-activity-link"
                                        to={{
                                            pathname: "/routine_activities",
                                            state: { activity: e.activities, name: e.name },
                                        }}>
                                        <button>Let's Go!</button>
                                    </Link>

                                { userId === e.creatorId
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
                                                <span className="material-icons">edit</span>
                                            </button>
                                        </Link>
                                        <Link 
                                            className="add-activity-link"
                                            to={{
                                                pathname: "/addactivity",
                                                state: {
                                                    routineId: e.id,
                                                    routineName: e.name,
                                                    routineGoal: e.goal,
                                                    rIsPublic: e.isPublic
                                                }
                                            }}>
                                            <button>
                                                <span className="add-icon">add</span>
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