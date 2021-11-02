import React, { useState, useEffect } from "react";

import { registerUser } from "../api";
import { storeToken } from "../auth";

const Register = ({ isLoggedIn, setIsLoggedIn }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  if (isLoggedIn && !registered)
    return <div className="register-main-container">You're stilled logged in!  Log out before registering as a different user.</div>
  else if (isLoggedIn && registered)
    return <div className="register-main-container">Account registered! Let's start pitching!</div>

  return (
    <div className="register-main-container">
      <form
        id="register"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            const results = await registerUser(userName, password);
            if (results.user) {
              storeToken(results.token);
              setIsLoggedIn(true);
              setRegistered(true);
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
        <fieldset className="auth-component-input">
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            placeholder="enter username"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </fieldset>

        <fieldset className="auth-component-input">
          <label htmlFor="password">User Password</label>
          <input
            id="password"
            type="password"
            placeholder="enter password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </fieldset>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;