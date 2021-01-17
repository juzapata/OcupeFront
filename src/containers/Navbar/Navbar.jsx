import React from 'react';
import { Link } from 'react-router-dom'
import Image from '../../components/base/Image';
import Cta from '../../components/base/Cta';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__icons">
          <Cta 
            href="/"
            icon="fas fa-door-open"
          />
          <i className="fas fa-user-circle"></i>
        </div>
        <Link to="/home">
        <Image
          classNameImage="image__navbar-logo"
          src="/logo-nome.png"
          alt="Logo Ocupe"
        />
        </Link>
      </div>
  </nav>
  )
}

export default Navbar;