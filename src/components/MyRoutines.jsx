import React, { useState, useEffect } from 'react';
import { getMyID, fetchUserRoutines } from '../api'
import { SingleRoutine, CreateRoutine } from './';

const MyRoutines = ({ allRoutines, setAllRoutines, isLoggedIn }) => {
    const [userRoutines, setUserRoutines] = useState([]);
    
    useEffect(() => {
        async function getUserRoutines(){
            try {
                const { username } = await getMyID();
            
                const routines = await fetchUserRoutines(username);
                setUserRoutines(routines);
    
            } catch (err) {
                console.log(err)
            }
        }
       getUserRoutines();
    }, []);

    return (
        <div className="my-routines-main-container">
            {
                isLoggedIn
                ? <div className="single-my-routine">
                 <SingleRoutine
                allRoutines={userRoutines}
            />

            <CreateRoutine
                allRoutines={allRoutines}
                setAllRoutines={setAllRoutines}
            />
            </div>
            : <h2>You must be logged in to see your routines.</h2>
            }
          
        </div>
    )
}

export default MyRoutines;