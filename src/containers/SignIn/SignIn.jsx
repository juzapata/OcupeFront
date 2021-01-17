import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Image from '../../components/base/Image';
import Cta from '../../components/base/Cta';
import { Link } from 'react-router-dom';


const SignIn = () => {
  const handleLogin = (e) => {
    // let inputSearchValue = e.target.value; 
    // setInputValue(inputSearchValue)   
  }
  
  return (    
    <div className="sign__group">
      <Image
        classNameImage="image__banner"
        src="/banner-login.svg"
        alt="Banner Login"
      />
      <form className="sign__form">
        <Input
          label="E-mail"
          placeholder="seuemail@exemplo.com"
          type="email"
        />
        <Input
          label="Senha"
          placeholder="mínimo 6 caracteres"
          type="password"
        />
        <Link to="/home">
          <Button 
          type="submit"
          classNameBtn="btn__primary"
          text="Entrar"/>
        </Link>

        <Link  to="/register">
          <Cta
          classNameCta="cta__primary"
          text="Cadastre-se"
          />
        </Link>
        
      </form>
    </div>
  )
}

export default SignIn;