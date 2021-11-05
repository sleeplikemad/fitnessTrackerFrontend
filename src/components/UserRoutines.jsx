import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom"
import { fetchUserRoutines } from '../api';
import { SingleRoutine } from './';

const UserRoutines = ({ allRoutines, setAllRoutines }) => {
    const [userRoutines, setUserRoutines] = useState([]);
    const pageLocation = useLocation();
    const { creatorName } = pageLocation.state;

    useEffect(() => {
        async function getUserRoutines() {
            try {
                const routines = await fetchUserRoutines(creatorName);
                setUserRoutines(routines);

            } catch (err) {
                console.log(err)
            }
        }
        getUserRoutines();
    }, []);

    return (
        <div className="my-routines-main-container">
            <div className="single-my-routine">
                <SingleRoutine
                    allRoutines={userRoutines}
                />
            </div>
        </div>
    )
}

export default UserRoutines;