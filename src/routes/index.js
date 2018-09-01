import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/structures/homePage/Home';
import Dynamics from '../components/structures/dynamicsComponents/navbarLinks';
import Reference from '../components/contents/extras/reference';
import Argumentacoes from '../components/contents/dinamica01/argumentacoes';
import PlanoComunicacao from '../components/contents/extras/planoComunicacao';
import GuiaContribuicao from '../components/contents/extras/guiaContribuicao';
import Reunioes from '../components/contents/extras/reunioes';
import wh from '../components/contents/dinamica01/5w2h';
import MetodologiaDefinicoes from '../components/contents/dinamica02/metodologiaDefinicoes';

export default () => (
  <BrowserRouter basename="/wiki">
    <Switch>
      <Route path="/" exact render={props => <HomePage {...props} />} />
      <Route path="/dinamica" exact component={Dynamics} />
      <Route path="/referencia" exact component={Reference} />
      <Route path="/5w2h" exact component={wh} />
      <Route path="/argumentacoes" exact component={Argumentacoes} />
      <Route path="/planoComunicacao" exact component={PlanoComunicacao} />
      <Route path="/guiaContribuicao" exact component={GuiaContribuicao} />
      <Route path="/reunioes" exact component={Reunioes} />
      <Route path="/metodologiaDefinicoes" exact component={MetodologiaDefinicoes} />
    </Switch>
  </BrowserRouter>
);
