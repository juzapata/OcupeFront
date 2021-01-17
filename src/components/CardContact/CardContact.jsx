import React from 'react';
import Cta from '../base/Cta';

const CardContact = (props) => {
  return (
    <>
    <ul className="contact__list">
      <li className="contact__list-item">
        <Cta 
          href="https://www.google.com.br/" 
          classNameCta="cta__secondary"
          icon="cta__icon fab fa-whatsapp" 
          text="11 99999-9999"/>
      </li>
      <li className="contact__list-item">
        <Cta 
          href="https://www.google.com.br/" 
          classNameCta="cta__secondary"
          icon="cta__icon fas fa-envelope" 
          text="emaildomentor@gmail.com"/>
      </li>
      <li className="contact__list-item">
        <Cta 
          href="https://www.google.com.br/" 
          classNameCta="cta__secondary"
          icon="cta__icon fas fa-calendar" 
          text="agende seu horário de mentoria"/>
      </li>
    </ul>
    <Cta 
    href="https://www.google.com.br/" 
    classNameCta="cta__secondary cta__secondary--back"
    icon="cta__icon fas fa-chevron-left" 
    text="Voltar"/>
    </>
  ) 
}

export default CardContact;