import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Image from '../../components/base/Image';
import Cta from '../../components/base/Cta';
import { Link } from 'react-router-dom';

const initialValues = {
  email: "",
  senha: "",
}

const SignIn = () => {
  const [values, setValues] = useState(initialValues);

  const handleLogin = (e) => { 
    const { name, value } = e.target;
    
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values)
  }
  
  return (    
    <div className="sign__group">
      <Image
        classNameImage="image__banner"
        src="./logo.png"
        alt="Banner Login"
      />
      <form className="sign__form">
        <Input
          label="E-mail"
          placeholder="seuemail@exemplo.com"
          type="email"
          value={values.email}
          name="email"
          onChange= {handleLogin}/>
        <Input
          label="Senha"
          placeholder="mínimo 6 caracteres"
          type="password"
          value={values.senha}
          name="senha"
          onChange= {handleLogin}/>
        <Link to="/home">
          <Button 
          type="submit"
          classNameBtn="btn__primary"
          text="Entrar"/>
        </Link>
        <Cta
        classNameCta="cta__primary"
        text="Cadastre-se"
        href="/register"
        />
        
      </form>
    </div>
  )
}

export default SignIn;