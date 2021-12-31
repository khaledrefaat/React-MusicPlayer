import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = ({ isOpen }) => {
  return (
    <ul className={`nav__list ${isOpen ? 'active' : ''}`}>
      <li className="nav__item active">
        <NavLink
          className={({ isActive }) =>
            isActive ? `nav__link active` : 'nav__link'
          }
          to="/"
        >
          home
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          className={({ isActive }) =>
            isActive ? `nav__link active` : 'nav__link'
          }
          to="/playlists"
        >
          Playlists
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          className={({ isActive }) =>
            isActive ? `nav__link active` : 'nav__link'
          }
          to="/user/library"
        >
          Your Library
        </NavLink>
      </li>
      <li className="nav__item">
        <NavLink
          className={({ isActive }) =>
            isActive ? `nav__link active` : 'nav__link'
          }
          to="/playlists/new"
        >
          Upload
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
