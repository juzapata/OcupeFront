import React from 'react';
import './App.scss';
import '../../styles/main.scss';
import Button from '../../components/base/Button';

const App = () => {

  return (
    <div className="container">
      <h1>Ocupe</h1>
      <Button 
        type="submit"
        classNameBtn="btn__primary btn__primary--bigger"
        text="Entrar"
      />
    </div>
  );
}

export default App;