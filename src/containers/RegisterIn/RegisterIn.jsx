import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Image from '../../components/base/Image';
import Cta from '../../components/base/Cta';

const RegisterIn = () => {
  const [inputNameValue, setInputNameValue] = useState('');
  // const [inputAddressValue, setInputAddressValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  let history = useHistory();

  const clickRegister = (e) => {
    e.preventDefault();
      if(inputNameValue && inputEmailValue && inputPasswordValue) {
        history.push('/home');
      } else {
        alert('Preencha todos os campos!');
      }
  }

  return (    
    <div className="sign__group">
      <Image
        classNameImage="image__banner"
        src="/logo.png"
        alt="Banner Login"
      />
      <form className="sign__form">
        <Input
          label="Nome"
          placeholder="nome"
          type="text"
          onChange= {(e) => setInputNameValue(e.target.value)}/>
        {/* <Input
          label="Endereço"
          placeholder="endereço"
          type="text"
          onChange= {(e) => setInputAddressValue(e.target.value)}/> */}
        <Input
          label="E-mail"
          placeholder="seuemail@exemplo.com"
          type="email"
          onChange= {(e) => setInputEmailValue(e.target.value)}/>
        <Input
          label="Senha"
          placeholder="mínimo 6 caracteres"
          type="password"
          onChange= {(e) => setInputPasswordValue(e.target.value)}/>
        <Button 
          type="submit"
          classNameBtn="btn__primary"
          text="Cadastar"
          onClick={(e) => clickRegister(e)}
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