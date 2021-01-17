import React from 'react';
import { BrowserRouter} from "react-router-dom";

import '../../styles/main.scss';
import Routes from '../../routes';

const App = () => {

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;