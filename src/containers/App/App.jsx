import React from 'react';
import './App.scss';
import '../../styles/main.scss';
import Button from '../../components/base/Button';
import Input from '../../components/base/Input';

const App = () => {

  return (
    <div className="container">
      <h1>Ocupe</h1>
      <Button 
        type="submit"
        classNameBtn="btn__primary btn__primary--bigger"
        text="Entrar"
      />
      <Input 
      label = "Teste"
      type="text"
      text="Entrar"
      placeholder="Nome"/>
    </div>
  );
}

export default App;