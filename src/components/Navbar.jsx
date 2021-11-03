import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  return (
    <div className="navbar">
      <NavLink to="/routines">Routines</NavLink>
      <NavLink to="/activities"> Activities</NavLink>
      {isLoggedIn ? <NavLink to="/myroutines"> MyRoutines</NavLink> : null}
      {isLoggedIn ? (
        <NavLink to="/logout">
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
