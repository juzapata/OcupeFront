import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '../../components/base/Button';
import Image from '../../components/base/Image';
import Title from '../../components/base/Title';

const Track = () => {
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
    <>
    <Title 
      text="Sua Trilha"
      classNameTitle="title"/>
      {/* <Button 
        type="submit"
        classNameBtn="btn__primary btn__primary--bigger"
        text="Entrar"
      />
      <Button 
        type="submit"
        classNameBtn=" btn__secondary btn__secondary"
        text="Entrar"
      /> */}
      <Button 
        type="submit"
        classNameBtn="btn__secondary btn__secondary--success-green i"
        text="Teste Vocacional"
        icon="fas fa-pen-square"  
      />
      <Button 
        type="submit"
        classNameBtn="btn__secondary btn__secondary--success-green i"
        text="Fale com um(a) psicólogo(a)"
        icon="fas fa-brain"  
      />
      <Button 
        type="submit"
        classNameBtn="btn__secondary btn__secondary i"
        text="Ache um Mentor"
        icon="fas fa-chalkboard-teacher"  
      />
      <Button 
        type="submit"
        classNameBtn="btn__secondary btn__secondary--block-gray i"
        text="Sua Mentoria"
        icon="fas fa-hands-helping"  
      />
      <Button 
        type="submit"
        classNameBtn="btn__secondary btn__secondary--block-gray i"
        text="Vagas"
        icon="fas fa-briefcase"  
      />
      {/* <Button 
        type="submit"
        classNameBtn="btn__icon btn__icon--profile"
        icon="fas fa-user-alt"
      /> */}
      <Image
        classNameImage="image__banner"
        src="/banner-home.svg"
        alt="Banner Home"
      />
    </>
  )
}

export default Track;