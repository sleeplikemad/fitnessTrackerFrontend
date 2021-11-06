import React, { useState, useEffect } from 'react';
import { getMyID, fetchUserRoutines } from '../api'
import { SingleRoutine, CreateRoutine } from './';

const MyRoutines = ({ allRoutines, setAllRoutines, isLoggedIn }) => {
    const [userRoutines, setUserRoutines] = useState([]);
    const [reloadMyRoutine, setReloadMyRoutine] = useState(false); // desperate attempt at getting the useEffect to run so the page doesn't load from cache but from a reload

    useEffect(() => {
        async function getUserRoutines() {
            try {
                const { username } = await getMyID();

                const routines = await fetchUserRoutines(username);
                setUserRoutines(routines);

            } catch (err) {
                console.log(err)
            }
        }
        getUserRoutines();
    }, [allRoutines]);

    return (
        <div className="my-routines-main-container">
            {
                isLoggedIn
                    ? <div>
                        {userRoutines.length
                            ? <SingleRoutine
                                allRoutines={userRoutines}
                            /> : <p className="no-myroutines">You have no routines yet! Scroll down to create one</p>
                        }

                    </div>
                    : <h2>You must be logged in to see your routines.</h2>
            }

        </div>
    )
}

export default MyRoutines;