import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const Map = (props) => { 

  const [mentorsData, setMentorsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch('https://ocupe-back-end.herokuapp.com/ocupe/get-mentors')
          .then((res) => res.json())
          .then(data => setMentorsData(data.mentores));
      } catch (e) {
          console.error(e);
      }
    };
    fetchData();
  }, [mentorsData]);

    return (
      <MapContainer center={props.mentoredAddress} zoom={13} scrollWheelZoom={false} style={{
            height:"366px",
            width: "100%"}}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={props.mentoredAddress} >
            <Popup>
              Sua localização
            </Popup>
            </Marker>
            {mentorsData.map((mentor, i) => {
              return(
                <Marker position={Object.values(mentor.address)} key={i}>
                <Popup>
                localização do(a) {mentor.name}
            </Popup>
          </Marker>)  
          })}
      </MapContainer>  
    ) 
}

export default Map;