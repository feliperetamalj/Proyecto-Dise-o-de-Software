import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import DarkModeToggle from './DarkModeToggle';
import Language from '../Language/Language';
import CartButton from './CartButton';
import { UserContext } from '../../context/UserContext';

const Navbar = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(UserContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">{t('nav.brand')}</div>
      <button className="navbar-menu" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="/">{t('nav.home')}</a></li>
        <li><a href="/contact">{t('nav.contact')}</a></li>
        <li className="navbar-language"><Language /></li>
        {user ? (
          <>
            <li>Bienvenido, {user.email}</li>
            <li><CartButton /></li>
            <li><a href="/" className="logout-link" onClick={handleLogout}>{t('nav.logout')}</a></li>
          </>
        ) : (
          <li><a href="/login">{t('nav.login')}</a></li>
        )}
      </ul>

      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;