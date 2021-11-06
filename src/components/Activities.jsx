import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from 'react-router-dom';
import { fetchRoutinesByActivity } from '../api';

const Activities = ({ allActivities }) => {
    return (
        <div className="activity-main">
            {
                allActivities.length ?
                    allActivities.map((e,idx) => {

                        return (
                                <div key={`activity ${e.name}${e.id}`} 
                                className={idx%2===0 ? "activity-card blue" : "activity-card grey"}>
                                    <h3>{e.name}</h3>
                                    <p><span className="single-activity-description">{e.description}</span></p>
                                    <Link
                                        className="routine-activity-link"
                                        to={{
                                          pathname: "/activities/routines",
                                          state : { activity : e }
                                        }}>
                                        <button>Let's Go!</button>
                                        </Link>
                                </div>
                        )
                    })
                    : null
            }
        </div>
    )
}

export default Activities;