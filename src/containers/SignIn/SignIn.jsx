import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Image from '../../components/base/Image';
import Cta from '../../components/base/Cta';

const SignIn = () => {
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');
  const [mentorados, setMentorados] = useState([]);
  let history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch('https://ocupe-back-end.herokuapp.com/ocupe/get-mentored')
          .then((res) => res.json())
          .then(data => setMentorados(data.mentorados));
      } catch (e) {
          console.error(e);
      }
  };
  fetchData();
}, []);

  const clickLogin = (e) => {
    e.preventDefault();
      if((inputEmailValue === mentorados[0].contact.email && Number(inputPasswordValue) === mentorados[0].password) ||
          (inputEmailValue === mentorados[1].contact.email && Number(inputPasswordValue) === mentorados[1].password)) {
        history.push('/home');
      } else {
        alert('Dados incorretos!');
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
          label="E-mail"
          placeholder="seuemail@exemplo.com"
          type="email"
          name="email"
          onChange= {(e) => setInputEmailValue(e.target.value)}/>
        <Input
          label="Senha"
          placeholder="mínimo 6 caracteres"
          type="password"
          name="senha"
          onChange= {(e) => setInputPasswordValue(e.target.value)}/>
          <Button 
          type="submit"
          classNameBtn="btn__primary"
          text="Entrar"
          onClick={(e) => clickLogin(e)}
        />
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