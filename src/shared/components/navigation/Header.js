import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

import { ReactComponent as MenuIcon } from '../../../assets/menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../../assets/close.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav__brand">
        <Link to="/">waves</Link>
      </div>
      <div className="nav__icon" onClick={() => setIsOpen(isOpen => !isOpen)}>
        {isOpen ? <CloseMenuIcon /> : <MenuIcon />}
      </div>
      <NavLinks isOpen={isOpen} />
    </nav>
  );
};

export default Header;
