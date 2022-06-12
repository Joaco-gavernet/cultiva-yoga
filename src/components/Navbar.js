import React from 'react';

const liStyles = 'no-underline';

const Navbar = () => {
  return (
    <nav>
      <ul >
        <li className={liStyles}>
          <a href="#">Inicio</a>
        </li>
        <li className={liStyles}>
          <a href="#introduccion">Introducción</a>
        </li>
        <li className={liStyles}>
          <a href="#testimonios">Testimonios</a>
        </li>
        <li className={liStyles}>
          <a href="#clases">Clases</a>
        </li>
        <li className={liStyles}>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;