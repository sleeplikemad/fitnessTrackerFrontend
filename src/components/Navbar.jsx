import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { clearCurrentUser, getToken } from "../auth"
import logoIcon from '../images/ftLogo.png'

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
const token = getToken();
const [navbar, setNavbar]=useState(false);

const toggleBackground =()=>{
if (window.scrollY >= 80){
  setNavbar(true);
}else{
  setNavbar(false);
}
}
window.addEventListener('scroll', toggleBackground)

useEffect(()=>{
if (token){
setIsLoggedIn(true);
}
},[])

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
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
