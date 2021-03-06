import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal'
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
      <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <button className='button1'><NavLink to='/destinations'>Destinations</NavLink></button>
        <LoginFormModal className='button2'/>
        <button className='button3'><NavLink  to="/signup">Sign Up</NavLink></button>
      </>
    );
  }

  return (
    <div className='nav-bar'>
      <div className='nav-links'>
        <NavLink className='Home' exact to="/">Float My Boat</NavLink>
      </div>
        <div  className='buttons'>{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
