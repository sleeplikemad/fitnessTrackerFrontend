import React, { useEffect } from 'react';

import { SingleRoutine} from './';

const Routines = ({ allRoutines, setAllRoutines }) => {

    return (
        <div className="routines-main-container">
          
            <SingleRoutine
                allRoutines={allRoutines}
                setAllRoutines={setAllRoutines}
            />
           
        </div>
    )
}

export default Routines;