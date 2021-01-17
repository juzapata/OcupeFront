import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
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

    <Route path="/Home">
      <Home />
    </Route>

    <Route path="/mentor">
      <MentorInfo />
    </Route>
  </Switch>
);

export default Routes;