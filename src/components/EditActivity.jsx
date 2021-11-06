import React, { useState } from 'react';
import { updateActivity } from '../api';
import { useLocation, useHistory } from 'react-router-dom';
import logo from '../images/ftLogoWhite.png';

const EditActivity = ({ allActivities, setAllActivities, isLoggedIn }) => {
    const pageLocation = useLocation();
    const { activity } = pageLocation.state;
    const [name, setName] = useState(activity.name);
    const [description, setDescription] = useState(activity.description);

    const history = useHistory();

    const handleClick = () => {
        history.push('/activities');
    }
    return (
        <div className="create-activity-main-container">
            <img className='create-logo' src={logo} />
            <h2>Edit {activity.name} </h2>
            <form
                className="create-routine-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        const updatedActivity = await updateActivity(name, description, activity.id);

                        const allActivitiesCopy = allActivities.slice();
                        allActivitiesCopy.push(updatedActivity);
                        setAllActivities(allActivitiesCopy);
                        handleClick();
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

                <button>Edit Activity</button>
            </form>
        </div>
    )
}

export default EditActivity;