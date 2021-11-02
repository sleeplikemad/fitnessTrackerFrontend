import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

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
} from './components'

const App = () => {
  const [allRoutines, setAllRoutines] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div id="app">
    <Navbar />

      <Switch>
        <Route path="/routines">
          <Routines
            allRoutines={allRoutines}
          />
        </Route>
        <Route path="/myroutines">
          <MyRoutines isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/singleroutine">
          <SingleRoutine />
        </Route>
        <Route path="/singlemyroutine">
          <SingleMyRoutine isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/createroutine">
          <CreateRoutine isLoggedIn={isLoggedIn} />
        </Route>
        <Route path="/activities">
          <Activities />
        </Route>
        <Route path="/createactivity">
          <CreateActivity isLoggedIn={isLoggedIn} />
        </Route>
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