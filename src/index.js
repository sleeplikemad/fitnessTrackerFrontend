import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// These imports won't work until you fix ./components/index.js
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect,
} from 'react-router-dom';

import {
  Header
} from './components'

const App = () => {
  return (
        <div id="app">
            <h1>Hello, World!!</h1>
            <Header />
        </div>
  )
}


 ReactDOM.render(
   <Router>
     <App />
   </Router>,
  document.getElementById('App')
)