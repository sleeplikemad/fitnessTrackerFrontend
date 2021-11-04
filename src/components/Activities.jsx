import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from 'react-router-dom';
import { fetchRoutinesByActivity } from '../api';


const Activities = ({ allActivities }) => {
    return (
        <div>
            {
                allActivities.length ?
                    allActivities.map(e => {

                        return (
                            <>
                                <div key={`activity ${e.name}${e.id}`} className="single-activity-card">
                                    <h2 className="single-activity-title">{e.name}</h2>
                                    <p><span>ID: {e.id}</span></p>
                                    <p><span className="single-activity-description">{e.description}</span></p>
                                    <Link
                                        className="routine-activity-link"
                                        to={{
                                          pathname: "/activities/routines",
                                          state : { activity : e }
                                        }}>
                                        Let's Go!</Link>
                                </div>
                            </>
                        )
                    })
                    : null
            }
        </div>
    )
}

export default Activities;