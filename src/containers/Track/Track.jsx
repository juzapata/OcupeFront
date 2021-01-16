import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '../../components/base/Button';
import Image from '../../components/base/Image';
import Banner from '../../assets/images/banner-home.svg';

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
        classNameBtn="btn__secondary btn__secondary i"
        text="Fale com um(a) psicólogo(a)"
        icon="fas fa-brain"  
      />
      <Button 
        type="submit"
        classNameBtn="btn__secondary btn__secondary--success-green i"
        text="Fale com um(a) psicólogo(a)"
        icon="fas fa-brain"  
      />
      <Button 
        type="submit"
        classNameBtn="btn__secondary btn__secondary--block-gray i"
        text="Fale com um(a) psicólogo(a)"
        icon="fas fa-brain"  
      />
            <Button 
        type="submit"
        classNameBtn="btn__secondary btn__secondary--success-green i"
        text="Fale com um(a) psicólogo(a)"
        icon="fas fa-brain"  
      />
      <Button 
        type="submit"
        classNameBtn="btn__secondary btn__secondary--block-gray i"
        text="Fale com um(a) psicólogo(a)"
        icon="fas fa-brain"  
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