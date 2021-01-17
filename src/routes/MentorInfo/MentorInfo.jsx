import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import NavBar from '../../containers/Navbar';
import Footer from '../../containers/Footer';
import CardInfo from '../../containers/CardInfo';

const MentorInfo = () => {
  const [mentores, setMentores] = useState([]);
  const [mentorSelected, setMentorSelected] = useState([]);
  let location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch('https://ocupe-back-end.herokuapp.com/ocupe/get-mentors')
          .then((res) => res.json())
          .then(data => setMentores(data.mentores));
      } catch (e) {
          console.error(e);
      }
  };
  fetchData();
  
  let pathname = location.pathname;
  let mentorCode = pathname.split("/")[2]
  const filter = mentores.filter((mentor) => mentor.contact.email.includes(mentorCode));
  setMentorSelected(filter);
}, [location.pathname, mentores]);


  return (    
    <>
      <NavBar />
      <div className="container">
        <CardInfo mentor={mentorSelected}/>
        <Footer />
      </div>
    </>
  )
}

export default MentorInfo;