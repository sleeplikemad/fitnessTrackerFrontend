import React, { useState } from 'react';
import { addActivities } from '../api';

const CreateActivity = ({ allActivities, setAllActivities, isLoggedIn }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="create-activity-main-container">
            <h2>Create a New Activity </h2>
            <form
                className="create-activity-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        const newActivity = await addActivities(name, description);
                        setName('');
                        setDescription('');
                     
                        const allActivitiesCopy = allActivities.slice();
                        allActivitiesCopy.push(newActivity);
                        setAllActivities(allActivitiesCopy);

                    } catch (err) {
                        console.log(err);
                    }
                }}>

                <input
                    type="text"
                    id="activity-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Activity Name" />

                <textarea
                    id="activity-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Activity Description"
                    rows={6} />

                <button>Create Activity</button>
            </form>
        </div>
    )
}

export default CreateActivity;