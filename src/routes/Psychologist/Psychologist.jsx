import React from 'react';

import Image from '../../components/base/Image';
import Navbar from '../../containers/Navbar';
import Footer from '../../containers/Footer';

const Psychologist = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Image
        classNameImage="image__done"
        src='/feedback.png'
      ></Image>
    </div>
    <Footer />
    </>
  )
}

export default Psychologist;
