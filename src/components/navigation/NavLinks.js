import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../context/auth-context';

const NavLinks = ({ isOpen, setIsOpen }) => {
  const authenticate = useContext(AuthContext);

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
      {authenticate.isLoggedIn ? (
        <>
          <li className="nav__item">
            {
              NavComponent(`/library`, 'Your Library')

              //       { <NavLink className={({ isActive }) =>
              //   isActive &&  ? `nav__link active` : 'nav__link'
              // }
              // onClick={() => setIsOpen(isOpen => !isOpen)} to={`/user/${authenticate.userId}/library` }>Your Library</NavLink> }
            }
          </li>
          <li className="nav__item">
            {NavComponent('/playlist/new', 'Upload')}
          </li>
          <li className="nav__item">
            <button onClick={() => authenticate.logout()}> Logout </button>
          </li>
        </>
      ) : (
        <li className="nav__item">{NavComponent('/user/auth', 'Login')}</li>
      )}
    </ul>
  );
};

export default NavLinks;
