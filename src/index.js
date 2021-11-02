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
          <h2>my routines</h2>
        </Route>
        <Route path="/activities">
          <h2>activities</h2>
        </Route>
        <Route path="/login">
          <Login />
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