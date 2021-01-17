import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Image from '../../components/base/Image';
import Cta from '../../components/base/Cta';

const SignIn = () => {
  // const [productDetail, setProductDetail] = useState({});
  // const [chosenSize, setChosenSize] = useState('');
  // let history = useHistory();
  // const dispatch = useDispatch();


  // const handleProductSize = (e) => {
  //   setChosenSize(e.target.value)
  // }

  // useEffect(() => {
  //   let productDetail = productSelected[0];
  //   setProductDetail(productDetail)
  // }, [productSelected])

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
        <Button 
          type="submit"
          classNameBtn="btn__primary"
          text="Entrar"
        />
        <Cta
          classNameCta="cta__primary"
          href="https://www.google.com/"
          text="Cadastre-se"
        />
      </form>
    </div>
  )
}

export default SignIn;