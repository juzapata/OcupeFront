import React from 'react';
import { Link } from "react-router-dom";
import Cta from '../base/Cta';

const CtaList = ({props, onClick}) => {
  return (
      <div className="cta-list">
          <Cta
            href="/home"
            classNameCta="cta__icon cta__icon--footer i"
            icon="fas fa-pen-square" 
            text="Teste"
          />   
          <Cta
            href="/home"
            classNameCta="cta__icon cta__icon--footer i"
            icon="fas fa-brain"
            text="psicólogo(a)"
          />
          <Cta
            href="/home"
            classNameCta="cta__icon cta__icon--footer i"
            icon="fas fa-chalkboard-teacher"
            text="Mentor"
          />
          <Cta
            href="/home"
            classNameCta="cta__icon cta__icon--footer i"
            icon="fas fa-hands-helping" 
            text="Mentoria"
          />
          <Cta
            href="/home"
            classNameCta="cta__icon cta__icon--footer i"
            text="Vagas"
            icon="fas fa-briefcase"
          />
      </div>
  )
}
export default CtaList;