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
      <NavLink to='/destinations'>Destinations</NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className='nav-links' to="/signup">Sign Up</NavLink>
        <NavLink to='/destinations'>Destinations</NavLink>
        <LoginFormModal className='nav-links'/>
      </>
    );
  }

  return (
    <div className='nav-bar'>
      <div className='nav-links'>
        <NavLink exact to="/">Float My Boat</NavLink>
      </div>
        <div className='buttons'>{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
