import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/Home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="" exact component={HomePage} />
    </Switch>
  </BrowserRouter>
);
