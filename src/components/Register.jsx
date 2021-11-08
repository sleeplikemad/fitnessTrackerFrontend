import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import { registerUser } from "../api";
import { storeToken } from "../auth";
import logo from '../images/fitnessTrackerVert.png';

const Register = ({ isLoggedIn, setIsLoggedIn }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  }

  if (isLoggedIn && !registered)
    return <div className="register-main-container">You're stilled logged in!  Log out before registering as a different user.</div>
  else if (isLoggedIn && registered)
    return <div className="register-main-container">Account registered! Let's start pitching!</div>

  return (
    <div className="register-main-container">
      <div className="register-left-container">
        <img className="logo-text" src={logo} />
      </div>
      <div className="register-right-container">
        <div className="register-right-inner-container">
          <h2>Sign Up</h2>
          <form
            className="register-form"
            onSubmit={async (event) => {
              event.preventDefault();

              try {
                const results = await registerUser(userName, password);
                if (results.user) {
                  storeToken(results.token);
                  setIsLoggedIn(true);
                  setRegistered(true);
                  handleClick();
                }
                else
                  console.log('register failed: ', results.error.message)
                setUserName("");
                setPassword("");
              } catch (err) {
                console.log(err);
              }
            }}
          >

            <label htmlFor="userName">Username</label>
            <input
              id="userName"
              type="text"
              placeholder="enter username"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <button>Register</button>
          </form>
          <p>Already a member? <Link className='signup-link' to="/login">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;