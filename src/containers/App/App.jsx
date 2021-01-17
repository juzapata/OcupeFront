import React from 'react';
import { BrowserRouter} from "react-router-dom";

import '../../styles/main.scss';
import Routes from '../../routes';
import NavBar from '../Navbar';
import Footer from '../Footer';

const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;