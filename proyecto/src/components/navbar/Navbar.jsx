import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>  
    <nav className="navbar">
      <div className="navbar-brand">Tus Camisetas al mejor precio</div>
      <ul className="navbar-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/contact">Contacto</a></li>
        <li><a href="/language">Idioma</a></li>
        <li><a href="/signin">Iniciar sesión</a></li>
      </ul>
    </nav>
    
    </>
  );
};

export default Navbar;