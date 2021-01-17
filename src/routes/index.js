import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import MapSearch from './MapSearch';
import MentorInfo from './MentorInfo';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Login />
    </Route>

    <Route path="/Home">
      <Home />
    </Route>

    <Route path="/mentor">
      <MentorInfo />
    </Route>

    <Route path="/map">
      <MapSearch />
    </Route>
  </Switch>
);

export default Routes;