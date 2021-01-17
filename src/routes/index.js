import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Register from './Register';
import VocationalTest from './VocationalTest';
import Psychologist from './Psychologist';
import Search from './Search';
import MentorInfo from './MentorInfo';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>

    <Route path="/register">
      <Register />
    </Route>

    <Route path="/home">
      <Home />
    </Route>

    <Route path="/teste-vocacional">
      <VocationalTest />
    </Route>

    <Route path="/fale-com-psicologo">
      <Psychologist />
    </Route>

    <Route path="/busca-mentor">
      <Search />
    </Route>

    <Route path="/mentor/:mentorCode">
      <MentorInfo />
    </Route>
  </Switch>
);

export default Routes;