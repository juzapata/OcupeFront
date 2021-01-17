import React from 'react';
import Cta from '../Cta';


const CardContact = (props) => {
  return (
    <div>
      <Cta 
        href="https://www.google.com.br/" 
        classNameCta="cta__icon cta__icon--card-contact"
        icon="fab fa-whatsapp" 
        text="11 99999-9999"/>
      <Cta 
        href="https://www.google.com.br/" 
        classNameCta="cta__icon cta__icon--card-contact"
        icon="fas fa-envelope" 
        text="emaildomentor@gmail.com"/>
      <Cta 
        href="https://www.google.com.br/" 
        classNameCta="cta__icon cta__icon--card-contact"
        icon="fas fa-calendar" 
        text="agende seu horário de mentoria"/>
    </div>
  ) 
}

export default CardContact;