import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/Home';
import SubPage from '../components/subpage';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <HomePage {...props} />} />
      <Route path="/subpage" exact component={SubPage} />
    </Switch>
  </BrowserRouter>
);
