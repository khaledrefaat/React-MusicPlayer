import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({ isOpen }) => {
  return (
    <ul className={`nav__list ${isOpen ? 'active' : ''}`}>
      <li className="nav__item">
        <Link className="nav__link" to="/">
          home
        </Link>
      </li>
      <li className="nav__item">
        <Link className="nav__link" to="/playlists">
          Playlists
        </Link>
      </li>
      <li className="nav__item">
        <Link className="nav__link" to="/user/library">
          Your Library
        </Link>
      </li>
      <li className="nav__item">
        <Link className="nav__link" to="/playlists/new">
          Upload
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
