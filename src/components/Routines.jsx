import React from 'react';

import { SingleRoutine } from './';

const Routines = ({ allRoutines }) => {
    return (
        <div className="routines-main-container">
            <div>
            <SingleRoutine
                allRoutines={allRoutines}
            />
            </div>
        </div>
    )
}

export default Routines;