import React from 'react';

const SingleActivity = ({ allActivities }) => {
    return (
        <div className="single-activity-main-container">
            {
                allActivities.length ?
                    allActivities.map(e => {
                        return (
                            <div key={e.id} className="activity-card">
                                <h2>{e.name}</h2>
                                <p>{e.description}</p>
                            </div>
                        )
                    })
                    : null
            }
        </div>
    )
}

export default SingleActivity;