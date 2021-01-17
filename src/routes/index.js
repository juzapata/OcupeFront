import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Search from './Search';
import MentorInfo from './MentorInfo';
import Register from './Register';

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

    <Route path="/busca-mentor">
      <Search />
    </Route>

    <Route path="/mentor/:mentorCode">
      <MentorInfo />
    </Route>
  </Switch>
);

export default Routes;