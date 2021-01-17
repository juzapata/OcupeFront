// import React, { useState, useEffect } from 'react';
// import { useHistory } from "react-router-dom";
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';
import Image from '../../components/base/Image';
import Cta from '../../components/base/Cta';


const RegisterIn = () => {
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
          label="Nome"
          placeholder="nome"
          type="text"
        />
        <Input
          label="Endereço"
          placeholder="endereço"
          type="text"
        />
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
          text="Cadastar"
        />
        <Cta
          classNameCta="cta__primary"
          href="https://www.google.com/"
          text="Voltar ao Login"
        />
      </form>
    </div>
  )
}

export default RegisterIn;