import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {

    const mentores = [
        {mentor: 'Matheus', address: [-23.59245137135599, -46.639434269634904]},
        {mentor: 'Mariana', address: [-23.596546521787857, -46.6358959141827]}
    ];
  
    return (
      <MapContainer center={[-23.596063267424462, -46.62912682952263]} zoom={13} scrollWheelZoom={false} style={{
            height:"400px",
            width: "100%"}}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-23.596063267424462, -46.62912682952263]} style={{color: '#F9B29C'}} >
            <Popup>
              Sua localização
            </Popup>
          </Marker>
          {mentores.map((el, i) =>{
            
            console.log(typeof el.address);
            return(
             <Marker position={Object.values(el.address)} key={i}>
            <Popup>
              Casa do ${el.mentor}
            </Popup>
          </Marker>)  
          })}
          
      </MapContainer>  
    ) 
  }
  
  export default Map;