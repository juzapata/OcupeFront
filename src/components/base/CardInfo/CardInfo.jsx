import React from 'react';
import Image from '../Image';
import Title from '../Title';
import Button from '../Button';
import CardContact from '../CardContact';

const CardInfo = (props) => {
  return (
    <div className="card">
      <div className="card__header">
        <Image
          classNameImage="image__photo-mentor"
          src="./mentor-photo.jpg"
          alt="Foto do mentor"/>
        <div className="card__header-title">
          <h2>Maria Inês Arantes</h2>
          <h2><span>Musicista</span></h2>
        </div>
      </div>
      <p className="card__text">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas sit, odio dolores exercitationem quo? Blanditiis, deserunt doloremque in quod at fuga quas totam doloribus adipisci Rerum, eius voluptate voluptatibus officiis id necessitatibus, consequuntur quibusdam et ipsm assumenda eveniet voluptatem vitae. Veritatis!"     
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