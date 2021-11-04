import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { clearCurrentUser } from "../auth"

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  }

  return (
    <div className="navbar">
      <NavLink to="/routines">Routines</NavLink>
      <NavLink to="/activities"> Activities</NavLink>
      {isLoggedIn ? <NavLink to="/myroutines"> MyRoutines</NavLink> : null}
      {isLoggedIn ? (
        <NavLink to="/logout"
          onClick={() => {
            clearCurrentUser();
            handleClick();
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
