import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import NavBar from '../../containers/Navbar';
import Footer from '../../containers/Footer';

const MentorInfo = () => {
  return (    
    <>
      <NavBar />
      <p>Baleia</p>
      <Footer />
    </>
  )
}

export default MentorInfo;