import React from 'react';
import Cta from '../base/Cta';

const CtaList = () => {
  return (
    <nav className="cta__list">
      <Cta
        href="/teste-vocacional"
        classNameCta="cta__list-item cta__list-item--success-green"
        icon="fas fa-edit" 
        text="Teste"
        text2="vocacional"
      />   
      <Cta
        href="/fale-com-psicologo"
        classNameCta="cta__list-item cta__list-item--success-green"
        icon="fas fa-brain"
        text="Fale com um"
        text2="psicólogo(a)"
      />
      <Cta
        href="/busca-mentor"
        classNameCta="cta__list-item"
        icon="fas fa-chalkboard-teacher"
        text="Ache um"
        text2="mentor(a)"
      />
      <Cta
        href="#"
        classNameCta="cta__list-item cta__list-item--block-gray"
        icon="fas fa-hands-helping" 
        text="Sua"
        text2="mentoria"
      />
      <Cta
        href="#"
        classNameCta="cta__list-item cta__list-item--block-gray"
        icon="fas fa-briefcase"
        text="Vagas"
        text2="&nbsp;"
      />
    </nav>
  )
}
export default CtaList;