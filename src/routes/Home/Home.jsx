// import React, { useState, useEffect } from 'react';
// import { useHistory } from "react-router-dom";
import Navbar from '../../containers/Navbar';
import Track from '../../containers/Track';

const Home = () => {
  return (    
    <>
      <Navbar/>
      <div className="container">
        <Track/>
      </div>
    </>
  )
}

export default Home;