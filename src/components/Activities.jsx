import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from 'react-router-dom';
import { fetchRoutinesByActivity } from '../api';

const Activities = ({ allActivities }) => {
    return (
      <div className="activities-main-container">
        <div className="single-activity-main-container">
            {
                allActivities.length ?
                    allActivities.map(e => {

                        return (
                                <div key={`activity ${e.name}${e.id}`} className="single-activity-card">
                                    <h2 className="single-activity-title">{e.name}</h2>
                                    <p><span>ID: {e.id}</span></p>
                                    <p><span className="single-activity-description">{e.description}</span></p>
                                    <Link
                                        className="activity-routine-link"
                                        to={{
                                          pathname: "/activities/routines",
                                          state : { activity : e }
                                        }}>
                                        <button>Let's Go!</button></Link>
                                </div>
                        )
                    })
                    : null
            }
        </div>
      </div>
    )
}

export default Activities;