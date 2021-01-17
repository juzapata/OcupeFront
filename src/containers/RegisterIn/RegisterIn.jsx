import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Image from '../../components/base/Image';
import Cta from '../../components/base/Cta';
// import { Link } from 'react-router-dom';

const initialValues = {
  nome: "",
  endereco: "",
  email: "",
  senha: "",
}

const RegisterIn = () => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => { 
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
        src="/banner-login.svg"
        alt="Banner Login"
      />
      <form className="sign__form">
        <Input
          label="Nome"
          placeholder="nome"
          type="text"
          value={values.nome}
          name="nome"
          onChange= {handleInputChange}/>
        <Input
          label="Endereço"
          placeholder="endereço"
          type="text"
          value={values.endereco}
          name="endereco"
          onChange= {handleInputChange}/>
        <Input
          label="E-mail"
          placeholder="seuemail@exemplo.com"
          type="email"
          value={values.email}
          name="email"
          onChange= {handleInputChange}/>
        <Input
          label="Senha"
          placeholder="mínimo 6 caracteres"
          type="password"
          value={values.senha}
          name="senha"
          onChange= {handleInputChange}/>
        <Button 
          type="submit"
          classNameBtn="btn__primary"
          text="Cadastar"
          // onClick={(e) => registerUser(e)}
        />
        <Cta
          classNameCta="cta__primary"
          text="Voltar ao Login"
          href="/"
        />
        
      </form>
    </div>
  )
}

export default RegisterIn;