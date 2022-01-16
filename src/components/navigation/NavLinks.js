import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../context/auth-context';

const NavLinks = ({ isOpen, setIsOpen }) => {
  const authenticate = useContext(AuthContext);

  const NavComponent = (to, children) => (
    <NavLink
      to={to}
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
      {authenticate.isLoggedIn ? (
        <>
          <li className="nav__item">
            {NavComponent('/user/library', 'Your Library')}
          </li>
          <li className="nav__item">
            {NavComponent('/playlists/new', 'Upload')}
          </li>
        </>
      ) : (
        <li className="nav__item">{NavComponent('/user/auth', 'Login')}</li>
      )}
    </ul>
  );
};

export default NavLinks;
