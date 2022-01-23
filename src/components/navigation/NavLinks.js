import React from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';

const NavLinks = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const NavComponent = (path, children) => (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive ? `nav__link active` : 'nav__link'
      }
      onClick={() => setIsOpen(isOpen => !isOpen)}
    >
      {children}
    </NavLink>
  );

  return (
    <ul className={`nav__list ${isOpen ? 'active' : ''}`}>
      <li className="nav__item active">{NavComponent('/', 'home')}</li>
      <li className="nav__item">{NavComponent('/playlists', 'Playlists')}</li>
      {isLoggedIn ? (
        <>
          <li className="nav__item">
            {NavComponent('/playlist/new', 'Upload')}
          </li>
          <li className="nav__item">
            <button onClick={() => dispatch(authActions.logout())}>
              {' '}
              Logout{' '}
            </button>
          </li>
        </>
      ) : (
        <li className="nav__item">{NavComponent('/user/auth', 'Login')}</li>
      )}
    </ul>
  );
};

export default NavLinks;
