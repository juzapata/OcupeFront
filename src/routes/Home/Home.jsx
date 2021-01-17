// import React, { useState, useEffect } from 'react';
// import { useHistory } from "react-router-dom";
import Navbar from '../../containers/Navbar';
// import Track from '../../containers/Track';
import CardInfo from '../../components/base/CardInfo';

const Home = () => {
  return (    
    <>
      <Navbar/>
      <div className="container">
        {/* <Track/> */}
        <CardInfo/>
      </div>
    </>
  )
}

export default Home;