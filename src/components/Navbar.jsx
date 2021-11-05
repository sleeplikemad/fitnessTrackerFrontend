import React from "react";
import { NavLink } from "react-router-dom";
import { clearCurrentUser } from "../auth"
import logoIcon from '../images/ftLogo.png'

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {

  return (
    <div className="navbar">
      <section className="nav-logo">
        
      </section>
      <section className="nav-links">
      <img className="nav-logo-icon" src={logoIcon}/>
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
      </section>
    </div>
  );
};

export default Navbar;
