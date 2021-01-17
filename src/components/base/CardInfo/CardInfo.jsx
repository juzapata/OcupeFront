import React from 'react';
import Image from '../Image';
import Title from '../Title';
import Button from '../Button';
import CardContact from '../CardContact';

const CardInfo = (props) => {
  return (
    <div className="card-body">
      <div className="card-header">
        <Image
          classNameImage="image__photo-mentor"
          src="./mentor-photo.svg"
          alt="Foto do mentor"/>
        <div className="card-header-title">
          <Title 
            text="Maria Inês Arantes"
            classNameTitle="title__mentor-name"/>
          <Title
            text="Musicista"
            classNameTitle="title__mentor-job"/>
        </div>
      </div>
      <p className="card-text">
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