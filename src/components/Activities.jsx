import React from "react";

import { Link } from 'react-router-dom';

const Activities = ({ allActivities, isLoggedIn }) => {
    return (
        <div className="activity-main">
            {
                allActivities.length ?
                    allActivities.map((e, idx) => {

                        return (
                            <div key={`activity ${e.name}${e.id}`}
                                className={idx % 2 === 0 ? "activity-card blue" : "activity-card grey"}>
                                <h3>{e.name}</h3>
                                <p><span className="single-activity-description">{e.description}</span></p>
                                <Link
                                    className="activity-routine-link"
                                    to={{
                                        pathname: "/activities/routines",
                                        state: { activity: e }
                                    }}>

                                    <button>Let's Go!</button>
                                </Link>
                                {
                                    isLoggedIn
                                        ? <Link to={{
                                            pathname: "/editactivity",
                                            state: { activity: e }
                                        }}>
                                            <button>
                                                <span className={idx % 2 === 1 ? "material-icons white" : "material-icons"}>
                                                    edit
                                                    </span>
                                            </button>
                                        </Link>
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

export default Activities;