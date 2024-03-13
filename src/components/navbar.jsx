// components/navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';  // Correct import statement
import logoKasa from '../assets/logo_kasa.png';

const Navbar = () => {
  return (
    <div id="navbar">
        <img id="navbar__logo" src={logoKasa} alt="Le logo de Kasa" />
      <div id="navbar__menu">
        {/* Use NavLink for navigation */}
        <NavLink to="/" className="navbar__menu--item">
          Accueil
        </NavLink>
        <NavLink to="/about" className="navbar__menu--item">
          A propos
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
