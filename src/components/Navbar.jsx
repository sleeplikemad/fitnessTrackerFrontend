import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isLoggedIn }) => {
  return (
    <div className="navbar">
      <NavLink to="/">Routines</NavLink>
      <NavLink to="/myposts"> Activities</NavLink>
      {isLoggedIn ? <NavLink to="/mymessages"> MyRoutines</NavLink> : null}
      {isLoggedIn ? (
        <NavLink to="/logout">
          Logout
        </NavLink>
      ) : (
        <NavLink to="/login"> Login/Register</NavLink>
      )}
    </div>
  );
};

export default Navbar;
