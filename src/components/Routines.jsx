import React from 'react';

import { SingleRoutine} from './';

const Routines = ({ allRoutines, setAllRoutines }) => {
    return (
        <div className="routines-main-container">
            <SingleRoutine
                allRoutines={allRoutines}
            />
        </div>
    )
}

export default Routines;