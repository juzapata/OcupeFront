import React from 'react';
import { Link } from 'react-router-dom'
import Image from '../../components/base/Image';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <i className="fas fa-user-circle"></i>
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