import React from 'react';

import Image from '../../components/base/Image';
import Navbar from '../../containers/Navbar';
import Footer from '../../containers/Footer';

const VocationalTest = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Image
        classNameImage="image__done"
        src='/done.png'
      ></Image>
    </div>
    <Footer />
    </>
  )
}

export default VocationalTest;
