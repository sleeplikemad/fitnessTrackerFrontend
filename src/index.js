import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { fetchAllRoutines } from './api';
// These imports won't work until you fix ./components/index.js
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';

import {
  Header,
  Routines,
  Login,
  Register,
  Navbar
} from './components';

const App = () => {
  const [allRoutines, setAllRoutines] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(async () => {
    const routines = await fetchAllRoutines();
    setAllRoutines(routines);
  }, []);

  return (
    <div id="app">
      <Navbar
        isLoggedIn={isLoggedIn}
      />

      <Switch>
        <Route path="/routines">
          <Routines
            allRoutines={allRoutines}
          />
        </Route>
        <Route path="/myroutines">
          <h2>my routines</h2>
        </Route>
        <Route path="/activities">
          <h2>activities</h2>
        </Route>
        <Route path="/login">
          <Login
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