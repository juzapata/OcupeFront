import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Image from '../../components/base/Image';
import Cta from '../../components/base/Cta';
import { Link } from 'react-router-dom';

// const initialValues = {
//   email: "",
//   senha: "",
// }

const SignIn = () => {
  // const [values, setValues] = useState(initialValues);

  // const handleLogin = (e) => { 
  //   const { name, value } = e.target;
    
  //   setValues({
  //     ...values,
  //     [name]: value,
  //   });
  //   console.log(values)
  // }
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

  const handleEmailValue = (e) => {
    let inputValue = e.target.value; 
    setInputEmailValue(inputValue);
  }

  const handlePasswordValue = (e) => {
    let inputValue = e.target.value; 
    setInputPasswordValue(inputValue);
  }

  const clickLogin = (e) => {
    e.preventDefault();
      if((inputEmailValue === mentorados[0].contact.email && inputPasswordValue == mentorados[0].password) ||
          (inputEmailValue === mentorados[1].contact.email && inputPasswordValue == mentorados[1].password)) {
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
          onChange= {(e) => handleEmailValue(e)}/>
        <Input
          label="Senha"
          placeholder="mínimo 6 caracteres"
          type="password"
          name="senha"
          onChange= {(e) => handlePasswordValue(e)}/>
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