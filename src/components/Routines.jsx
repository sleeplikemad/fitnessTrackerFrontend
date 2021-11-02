import React from 'react';

import { SingleRoutine, CreateRoutine } from './';

const Routines = ({ allRoutines, setAllRoutines }) => {
    return (
        <div className="routines-main-container">
            <div>
            <SingleRoutine
                allRoutines={allRoutines}
            />
            </div>
            <div>
                <CreateRoutine
                allRoutines={allRoutines}
                setAllRoutines ={setAllRoutines}
                />
            </div>
        </div>
    )
}

export default Routines;