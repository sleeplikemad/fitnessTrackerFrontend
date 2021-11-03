import React from 'react';

import {SingleMyRoutine, CreateRoutine} from './';

const MyRoutines =({allRoutines, setAllRoutines})=>{
return(
    <div>
    <SingleMyRoutine />
    
    <CreateRoutine
    allRoutines={allRoutines}
    setAllRoutines ={setAllRoutines}
    />
</div>
)
}

export default MyRoutines;