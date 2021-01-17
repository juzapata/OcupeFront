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
        classNameTitle="title"
      />
    <div className="track__group">
      <div className="track__steps">
        <Button 
          type="submit"
          classNameBtn="btn__secondary btn__secondary--success-green"
          text="Teste Vocacional"
          icon="fas fa-edit"  
        />
        <Button 
          type="submit"
          classNameBtn="btn__secondary btn__secondary--success-green"
          text="Fale com um(a) psicólogo(a)"
          icon="fas fa-brain"  
        />
        <Button 
          type="submit"
          classNameBtn="btn__secondary"
          text="Ache um Mentor"
          icon="fas fa-chalkboard-teacher"  
        />
        <Button 
          type="submit"
          classNameBtn="btn__secondary btn__secondary--block-gray"
          text="Sua Mentoria"
          icon="fas fa-hands-helping"  
        />
        <Button 
          type="submit"
          classNameBtn="btn__secondary btn__secondary--block-gray"
          text="Vagas"
          icon="fas fa-briefcase"  
        />
      </div>
      <Image
        classNameImage="image__banner-home"
        src="/banner-home.svg"
        alt="Banner Home"
      />
    </div>
    </>
  )
}

export default Track;