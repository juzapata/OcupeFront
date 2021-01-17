import React, { useEffect, useState } from 'react';
import Image from '../../components/base/Image';
import Button from '../../components/base/Button';
import CardContact from '../../components/CardContact';

const CardInfo = ({mentor}) => {
  const [mentorDetail, setMentorDetail] = useState({});

  useEffect(() => {
    let mentorDetail = mentor[0];
    setMentorDetail(mentorDetail)
  }, [mentor]);


  return (
    <div className="card">
      <div className="card__header">
        <Image
          classNameImage="image__photo-mentor"
          src="./user.jpg"
          alt={`Foto de ${mentorDetail.name}`}/>
        <div className="card__header-title">
          <h2>{mentorDetail.name}</h2>
          <h2><span>{mentorDetail.profession}</span></h2>
        </div>
      </div>
      <p className="card__text">
        {mentorDetail.resume}
      </p>
      <Button 
        type="submit"
        classNameBtn="btn__secondary btn__secondary i"
        text="Adicionar mentor"
        icon="fas fa-user-plus"  
      />
      <CardContact />
    </div>
    )
  }

export default CardInfo;