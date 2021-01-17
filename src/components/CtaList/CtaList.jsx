import React from 'react';
import { Link } from "react-router-dom";
import Cta from '../base/Cta';

const CtaList = ({props, onClick}) => {
  return (
      <div>
          <Cta
            href="/home"
            classNameCta="cta__icon"
            icon="fas fa-pen-square" 
            text="Teste Vocacional"
          />   
          <Cta
            href="/home"
            classNameCta="cta__icon"
            icon="fas fa-brain"
            text="Fale com um(a) psicólogo(a)"
          />
          <Cta
            href="/home"
            classNameCta="cta__icon"
            icon="fas fa-chalkboard-teacher"
            text="Ache um Mentor"
          />
          <Cta
            href="/home"
            classNameCta="cta__icon"
            icon="fas fa-hands-helping" 
            text="Sua Mentoria"
          />
          <Cta
            href="/home"
            classNameCta="cta__icon"
            text="Vagas"
            icon="fas fa-briefcase"
          />
      </div>
  )
}
export default CtaList;