import React from 'react';
import CtaExternal from '../base/CtaExternal';

const CardContact = (props) => {
  // exemplos:
  const number = "+5511999999999";
  const url = "joana@gmail.com";
  const title = "Agendamento Mentoria";
  const date = "20211124T010000Z/20211124T020000Z";
  const locationExample = "123%20Main%20St%2C%20Example%2C%20NY"

  const hrefWhatsapp = `https://api.whatsapp.com/send?phone=${number}`;
  const hrefEmail = `mailto:?subject=${title}&amp;body=${url}`;
  const hrefAgenda = `http://www.google.com/calendar/event?action=TEMPLATE&text=Mentoria&dates=${date}&details=Event%20Details%20Here&location=${locationExample}`;

  return (
    <ul className="contact__list">
      <li className="contact__list-item">
        <CtaExternal 
          href={hrefWhatsapp}
          classNameCtaExternal="cta__secondary"
          icon="cta__icon fab fa-whatsapp" 
          text="11 99999-9999"/>
      </li>
      <li className="contact__list-item">
        <CtaExternal
          href={hrefEmail}
          classNameCtaExternal="cta__secondary"
          icon="cta__icon fas fa-envelope" 
          text="emaildomentor@gmail.com"/>
      </li>
      <li className="contact__list-item">
        <CtaExternal 
          href={hrefAgenda} 
          classNameCtaExternal="cta__secondary"
          icon="cta__icon fas fa-calendar" 
          text="agende seu horário de mentoria"/>
      </li>
    </ul>
  ) 
}

export default CardContact;