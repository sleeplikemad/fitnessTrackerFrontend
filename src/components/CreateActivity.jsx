import React, { useState } from 'react';
import { addActivities } from '../api';
import logo from '../images/ftLogoWhite.png';

const CreateActivity = ({ allActivities, setAllActivities, isLoggedIn }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    return (
            <div className="create-activity-main-container">
                <img className='create-logo' src={logo}/>
                <h2>Create a New Activity </h2>
                <form
                    className="create-routine-form"
                    onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                            const activityExists = allActivities.filter(activity => {
                                if (activity.name.toLowerCase() === name.toLowerCase()) {
                                    return activity.name;
                                }
                            });

                            if (activityExists.length) {
                                alert('This activity already exists')
                            } else {
                                const newActivity = await addActivities(name, description);
                                setName('');
                                setDescription('');

                                const allActivitiesCopy = allActivities.slice();
                                allActivitiesCopy.push(newActivity);
                                setAllActivities(allActivitiesCopy);
                            }
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
            </div> )
}

export default CreateActivity;