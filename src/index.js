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
} from './components'

const App = () => {
  const [allRoutines, setAllRoutines] = useState([]);

  return (
    <div id="app">
      <nav className="nav-bar">
        <section className="nav-bar-links">
          <Link className="nav-link" to="/">HOME</Link>
          <Link className="nav-link" to="/routines">ROUTINES</Link>
          <Link className="nav-link" to="/myroutines">MY ROUTINES</Link>
          <Link className="nav-link" to="/activities">ACTIVITIES</Link>
          <Link className="nav-link" to="/login">LOGIN</Link>
          <Link className="nav-link" to="/register">REGISTER</Link>
        </section>
      </nav>

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
        <Route path="/register">
          <Register />
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