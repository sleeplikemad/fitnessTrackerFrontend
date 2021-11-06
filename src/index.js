import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { fetchAllRoutines, fetchAllActivities } from "./api";

// These imports won't work until you fix ./components/index.js
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useLocation,
} from "react-router-dom";

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
  UserRoutines,
  CreateRoutineActivity,
  EditRoutineActivity
} from './components';

const App = () => {
  const [allRoutines, setAllRoutines] = useState([]);
  const [allActivities, setAllActivities] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const name = location.pathname.split("/").pop()

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
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Switch>
        <Route path="/routines">
          <Routines allRoutines={allRoutines} setAllRoutines={setAllRoutines} />
        </Route>
        <Route path="/myroutines">
          <MyRoutines
            isLoggedIn={isLoggedIn}
            allRoutines={allRoutines}
            setAllRoutines={setAllRoutines}
          />
        </Route>
        <Route path="/routinesby/:creatorName">
          <div className="single-activity-main">
            <div className="single-activity-title">
              <h2>Routines by {name}</h2>
            </div>
            <div className="single-activity-routine">
              <UserRoutines
                allRoutines={allRoutines}
                setAllRoutines={setAllRoutines}
              />
            </div>
          </div>
        </Route>
        <Route path="/editroutine">
          <EditRoutine
           isLoggedIn={isLoggedIn}
           allRoutines={allRoutines}
           setAllRoutines={setAllRoutines} />
        </Route> 
        <Route path="/addactivity">
          <CreateRoutineActivity
            allActivities={allActivities}
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path="/editroutineactivity">
          <EditRoutineActivity
            isLoggedIn={isLoggedIn}
          />
        </Route>
        <Route path="/routine_activities">
          <SingleRoutineActivity 
            isLoggedIn={isLoggedIn} />
        </Route>

        <Route path="/activities/routines">
          <SingleActivity />
        </Route>

        <Route path="/activities">
          <>
            <Activities allActivities={allActivities} />
            <div className="create-act">
              <CreateActivity
                allActivities={allActivities}
                setAllActivities={setAllActivities}
              />
            </div>
          </>
        </Route>

        <Route path="/createactivity">
          <CreateActivity
              allActivities={allActivities}
              setAllActivities={setAllActivities}
              isLoggedIn={isLoggedIn}/>
          <CreateActivity  />
        </Route> 
        <Route path="/login">
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/register">
          <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/">
          <Header />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("App")
);
