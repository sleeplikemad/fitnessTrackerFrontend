import React, {useEffect, useState} from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { deleteRoutineActivity, getMyID } from '../api';

const SingleRoutineActivity = ( {isLoggedIn} ) => {
    const pageLocation = useLocation();
    const [userID, setUserID] = useState()
    const { creatorId, activity, name, routineId, routineGoal, rIsPublic } = pageLocation.state;
    const [complete, setComplete]=useState({clickedItem: -1});

    const history = useHistory();

    const handleClick = () => {
        history.push('/myroutines');
    }

    useEffect(() => { 
        async function getUserID() {
            try {
                const { id } = await getMyID();
                setUserID(id)
            } catch (err) {
                console.log(err)
            }
        }
        getUserID();
    }, []);

    return (

        <div className="single-routine-activity-main">
            <h2>Activities for {name}</h2>
            {
                activity.length ?
                    activity.map((e, idx) => {
                        return (
                            <div key={`routine act ${e.id}`}
                                className={idx % 2 === 0 ? "routine-activity-card blue" : "routine-activity-card grey"}>
                                <div className="routine-activity-card-left">
                                    <input
                                        type="checkbox"
                                        id="ra-complete"
                                        value={complete}
                                        onChange={()=>{
                                           setComplete({clickedItem : idx})
                                        }}
                                    />
                                </div>
                                <div className="routine-activity-card-right">
                                <h3 className={idx === complete.clickedItem ? 'complete' : null}>{e.name}</h3>
                                <p>{e.description}</p>
                                <p className="routine-activity-count">
                                    <span>{e.count} reps</span> | <span>{e.duration} min.</span> 
                                {/* </p>
                                <p className="routine-activity-edit-buttons">  */}
                                    { userID === creatorId
                                        ? 
                                    <span>
                                        <span>  
                                            <Link 
                                                className="edit-activity-link"
                                                to={{
                                                    pathname: "/editroutineactivity",
                                                    state: {
                                                        routineActivityId: e.routineActivityId,
                                                        routineName: name,
                                                        name: e.name,
                                                        description: e.description,
                                                        duration: e.duration,
                                                        count: e.count
                                                    }
                                                }}>
                                                <button>
                                                    <span className={idx%2===1 ? "material-icons white" : "material-icons"}>edit</span>
                                                </button>
                                            </Link> 
                                        </span>  
                                        <span> 
                                            <button className="delete-button"
                                                onClick={async () => {
                                                    try {
                                                        await deleteRoutineActivity(e.routineActivityId);
                                                        handleClick()
                                                    } catch (err) {
                                                        console.log(err);
                                                    }
                                                }}>
                                                <span className={idx%2===1 ? "material-icons white" : "material-icons"}> delete </span> 
                                            </button>
                                        </span>
                                    </span>
                                    : null }  
                                </p>
                                </div>
                            </div>

                        )
                    })
                    : <p>There are no activities for this routine.</p>
            }
            { isLoggedIn && userID === creatorId ? 
            <Link 
                className="add-activity-link"
                to={{
                    pathname: "/addactivity",
                    state: {
                        routineId: routineId,
                        routineName: name,
                        routineGoal: routineGoal,
                        rIsPublic: rIsPublic
                    }
                }}>
                <button>
                    <span className="add-icon">+Add an Activity</span>
                </button>
            </Link>
            : null }
        </div>
    )
}

export default SingleRoutineActivity;