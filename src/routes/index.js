import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/Home';
import SubPage from '../components/subpage';
import Sidenav from '../components/sidenav';

export default () => (
  <BrowserRouter basename="/wiki">
    <Switch>
      <Route path="/" exact render={props => <HomePage {...props} />} />
      <Route path="/subpage" exact component={SubPage} />
      <Route path="/sidenav" exact component={Sidenav} />
    </Switch>
  </BrowserRouter>
);
