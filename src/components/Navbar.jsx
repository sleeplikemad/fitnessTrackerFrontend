import React from "react";
import { NavLink } from "react-router-dom";
import { clearCurrentUser } from "../auth"

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/routines">Routines</NavLink>
      <NavLink to="/activities"> Activities</NavLink>
      {isLoggedIn ? <NavLink to="/myroutines"> MyRoutines</NavLink> : null}
      {isLoggedIn ? (
        <NavLink to="/login"
          onClick={() => {
            clearCurrentUser();
            setIsLoggedIn(false);
          }}>
          Logout
        </NavLink>
      ) : (
        <NavLink to="/login"> Sign In</NavLink>
      )}
      <NavLink to="/register">Sign Up</NavLink>
    </div>
  );
};

export default Navbar;
