import React from 'react';
import Image from '../../components/base/Image';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <i className="fas fa-user-circle"></i>
        <Image
          classNameImage="image__navbar-logo"
          src="./text-logo-navbar.svg"
          alt="Logo Ocupe"
        />
      </div>
  </nav>
  )
}

export default Navbar;