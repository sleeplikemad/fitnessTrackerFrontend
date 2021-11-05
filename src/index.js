import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { fetchAllRoutines, fetchAllActivities } from './api';
// These imports won't work until you fix ./components/index.js
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  Redirect,
  Link
} from 'react-router-dom';

import {
  Header,
  Routines,
  Login,
  Register,
  Activities,
  SingleActivity,
  Navbar,
  SingleRoutineActivity,
  MyRoutines,
  EditRoutine,
  CreateActivity,
  UserRoutines
} from './components';

const App = () => {
  const [allRoutines, setAllRoutines] = useState([]);
  const [allActivities, setAllActivities] = useState([])
  const [allActivityRoutines, setAllActivityRoutines] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(async () => {
    try {
      const routines = await fetchAllRoutines();
      setAllRoutines(routines);

      const activities = await fetchAllActivities();
      setAllActivities(activities);
    } catch (err) {
      console.log(err);
    }

  }, []);


  return (
    <div id="app">
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      <Switch>
        <Route path="/routines">
          <Routines
            allRoutines={allRoutines}
            setAllRoutines={setAllRoutines}
          />
        </Route>
        <Route path="/myroutines">
          <MyRoutines
            isLoggedIn={isLoggedIn}
            allRoutines={allRoutines}
            setAllRoutines={setAllRoutines}
          />
        </Route>
         <Route path="/routinesby/:creatorName">
          <UserRoutines
          allRoutines={allRoutines}
          setAllRoutines={setAllRoutines}
          />
        </Route>
        {/*<Route path="/singlemyroutine">
          <SingleMyRoutine isLoggedIn={isLoggedIn} />
        </Route>*/}
        <Route path="/editroutine">
          <EditRoutine
           isLoggedIn={isLoggedIn}
           allRoutines={allRoutines}
           setAllRoutines={setAllRoutines} />
        </Route> 
        <Route path="/routine_activities">
          <SingleRoutineActivity />
        </Route>

        <Route path="/activities/routines">
          <SingleActivity />
        </Route>

        <Route path="/activities">
          <Activities
            allActivities={allActivities} />
            <CreateActivity
            allActivities={allActivities}
            setAllActivities={setAllActivities}/>
        </Route>

        {/*<Route path="/createactivity">
          <CreateActivity isLoggedIn={isLoggedIn} />
        </Route> */}
        <Route path="/login">

          <Login
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route path="/register">
          <Register
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
        <Route exact path="/">
          <Header />
        </Route>
      </Switch>
    </div>
  )
}


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('App')
)