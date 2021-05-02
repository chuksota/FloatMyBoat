import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {useHistory} from 'react-router-dom'
import ProfilePage from '../ProfilePage'
function ProfileButton({ user }) {
  const history = useHistory()
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const showProfilePage = () => {
    history.push('/profile')
  }
  const logoutRedirect = () => {
    return history.push('/')
  }
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    logoutRedirect()
  };

  return (
    <>
      <button onClick={openMenu} className='profile-button'>
        <i className="fas fa-bars" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
          <li>
            <button onClick={showProfilePage}>Profile</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
