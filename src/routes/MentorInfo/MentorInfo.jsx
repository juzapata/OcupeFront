import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import NavBar from '../../containers/Navbar';
import Footer from '../../containers/Footer';
import CardInfo from '../../containers/CardInfo';

const MentorInfo = () => {
  return (    
    <>
      <NavBar />
      <div className="container">
        <CardInfo />
        <Footer />
      </div>
    </>
  )
}

export default MentorInfo;