import React from 'react';
import Image from '../../components/base/Image';


const Navbar = () => {
  return (
      <div>
         <nav className="navbar">
          <i className="fas fa-user-circle"></i>
          <Image
            classNameImage="image__navbar-logo"
            src="./text-logo-navbar.svg"
            alt="Logo Texto"/>
        </nav>
      </div>
  )
}

export default Navbar;