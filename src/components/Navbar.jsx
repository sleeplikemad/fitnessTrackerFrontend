import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { clearCurrentUser, getToken } from "../auth"
import logoIcon from '../images/ftLogo.png'

const Navbar = ({ isLoggedIn, setIsLoggedIn, username }) => {
  const token = getToken();
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const toggleBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', toggleBackground);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className={
      location.pathname === '/login' || location.pathname === '/register'
        || location.pathname === '/activities/routines'
        || location.pathname === `/routinesby/${username}` ? 'navbar transparent'
        : navbar ? 'navbar active'
          : 'navbar'
    }>
      <section className={location.pathname === '/login'
        || location.pathname === '/register'
        || location.pathname === '/activities/routines'
        || location.pathname === `/routinesby/${username}` ? 'nav-right' : 'nav-links'}>
        <a href="https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/">
          <img className="nav-logo-icon" src={logoIcon} /></a>
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
