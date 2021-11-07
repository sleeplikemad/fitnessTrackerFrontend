import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { fetchAllRoutines, fetchAllActivities } from "./api";

import {
  BrowserRouter as Router,
  Route,
  Switch,
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
  CreateRoutine,
  UserRoutines,
  CreateRoutineActivity,
  EditRoutineActivity,
  EditActivity,
} from './components';

const App = () => {
  const [allRoutines, setAllRoutines] = useState([]);
  const [allActivities, setAllActivities] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const name = location.pathname.split("/").pop();

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
          {isLoggedIn
            ? <>
              <div className="single-my-routine">
                <MyRoutines
                  isLoggedIn={isLoggedIn}
                  allRoutines={allRoutines}
                  setAllRoutines={setAllRoutines}
                />
              </div>
              <div className="create-act">
                <CreateRoutine
                  allRoutines={allRoutines}
                  setAllRoutines={setAllRoutines}
                />
              </div>
            </>
            : null
          }
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
          {isLoggedIn
            ? <EditRoutine
              isLoggedIn={isLoggedIn}
              allRoutines={allRoutines}
              setAllRoutines={setAllRoutines} />
            : null
          }
        </Route>
        <Route path="/addactivity">
          {isLoggedIn
            ? <CreateRoutineActivity
              allActivities={allActivities}
              isLoggedIn={isLoggedIn}
            />
            : null
          }
        </Route>
        <Route path="/editroutineactivity">
          {isLoggedIn
            ? <EditRoutineActivity
              isLoggedIn={isLoggedIn}
              allActivities={allActivities}
              setAllActivities={setAllActivities}
            />
            : null
          }
        </Route>
        <Route path="/routine_activities">
          <SingleRoutineActivity
            isLoggedIn={isLoggedIn}
            allActivities={allRoutines}
            setAllActivities={setAllActivities} />
        </Route>

        <Route path="/activities/routines">
          <SingleActivity />
        </Route>

        <Route path="/activities">
          <>
            <Activities allActivities={allActivities}
              isLoggedIn={isLoggedIn} />
            <div className="create-act">
              {
                isLoggedIn
                  ? <CreateActivity
                    allActivities={allActivities}
                    setAllActivities={setAllActivities}
                  />
                  : null
              }
            </div>
          </>
        </Route>

        {/* <Route path="/createactivity">
          <CreateActivity
            allActivities={allActivities}
            setAllActivities={setAllActivities}
            isLoggedIn={isLoggedIn} />
        </Route> */}

        <Route path="/editactivity">
          {isLoggedIn
            ? <EditActivity
              allActivities={allActivities}
              setAllActivities={setAllActivities}
            />
            : null
          }
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
