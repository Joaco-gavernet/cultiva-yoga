import React from 'react';

const liStyles = `
  no-underline 
  text-xl 
  font-bold 
  relative 
  
  after:content-[""] 
  after:text-red-500
  after:absolute
  after:bottom-0
  after:left-0
  after:h-[2px]
  after:w-0
  after:bg-secondary

  hover:transition-all
  hover:after:transition-all
  hover:after:duration-300
  hover:after:ease-in-out
  hover:after:w-full
  
  `;

const Navbar = ({ className }) => {
  return (
    <nav className={className}>
      <ul className='flex space-x-12'>
        <li className={liStyles}>
          <a href="/">Inicio</a>
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
    </nav >
  );
};

export default Navbar;