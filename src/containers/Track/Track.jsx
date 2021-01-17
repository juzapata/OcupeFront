import React from 'react';
import { useHistory } from "react-router-dom";

import Button from '../../components/base/Button';
import Image from '../../components/base/Image';
import Title from '../../components/base/Title';

const Track = () => {
  let history = useHistory();

  const handleClick = (e, url) => {
    e.preventDefault();
    history.push(url)
  }

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
          onClick={(e) => handleClick(e,'/teste-vocacional')} 
        />
        <Button 
          type="submit"
          classNameBtn="btn__secondary btn__secondary--success-green"
          text="Fale com um(a) psicólogo(a)"
          icon="fas fa-brain"
          onClick={(e) => handleClick(e, '/fale-com-psicologo')} 
        />
        <Button 
          type="submit"
          classNameBtn="btn__secondary"
          text="Ache um Mentor"
          icon="fas fa-chalkboard-teacher"
          onClick={(e) => handleClick(e, '/busca-mentor')} 
        />
        <Button 
          type="submit"
          classNameBtn="btn__secondary btn__secondary--block-gray"
          text="Sua Mentoria"
          icon="fas fa-hands-helping" 
          disabled={true}
        />
        <Button 
          type="submit"
          classNameBtn="btn__secondary btn__secondary--block-gray"
          text="Vagas"
          icon="fas fa-briefcase"  
          disabled={true}
        />
      </div>
      <Image
        classNameImage="image__banner-home"
        src="/banner.png"
      />
    </div>
    </>
  )
}

export default Track;