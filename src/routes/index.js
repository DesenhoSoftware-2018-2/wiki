import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/structures/homePage/Home';
import Dynamics from '../components/structures/dynamicsComponents/navbarLinks';
import Reference from '../components/contents/extras/reference';
import PlanoComunicacao from '../components/contents/extras/planoComunicacao';
import GuiaContribuicao from '../components/contents/extras/guiaContribuicao';
import Reunioes from '../components/contents/extras/reunioes';
import MetodologiaDefinicoes from '../components/contents/dinamica02/metodologiaDefinicoes';
import GerenciamentoRiscos from '../components/contents/dinamica02/gerenciamentoRiscos';
import MonitoramentoRiscos from '../components/contents/dinamica02/monitoramentoRiscos';
import wh from '../components/contents/dinamica01/pre-rastreabilidade/5w2h';
import Argumentacoes from '../components/contents/dinamica01/pre-rastreabilidade/argumentacoes';
import Brainstorming from '../components/contents/dinamica01/elicitacao/brainstorming';
import Richpictures from '../components/contents/dinamica01/pre-rastreabilidade/richpictures';
import Prototipo from '../components/contents/dinamica01/elicitacao/prototipo';
import AnaliseProtocolo from '../components/contents/dinamica01/elicitacao/analiseProtocolo';
import Elicitacao from '../components/contents/dinamica01/elicitacao/elicitacao';
import PreRastreabilidade from '../components/contents/dinamica01/pre-rastreabilidade/pre-rastreabilidade';
import Priorizacao from '../components/contents/dinamica01/priorizacao/priorizacao';
import Moscow from '../components/contents/dinamica01/priorizacao/moscow';
import FirstThingsFirst from '../components/contents/dinamica01/priorizacao/firstThingsFirst';
import Modelagem from '../components/contents/dinamica01/modelagem/modelagem';

export default () => (
  <BrowserRouter basename="/wiki">
    <Switch>
      <Route path="/" exact render={props => <HomePage {...props} />} />
      <Route path="/dinamica" exact component={Dynamics} />
      <Route path="/referencia" exact component={Reference} />
      <Route path="/5w2h" exact component={wh} />
      <Route path="/argumentacoes" exact component={Argumentacoes} />
      <Route path="/richpictures" exact component={Richpictures} />
      <Route path="/brainstorming" exact component={Brainstorming} />
      <Route path="/planoComunicacao" exact component={PlanoComunicacao} />
      <Route path="/guiaContribuicao" exact component={GuiaContribuicao} />
      <Route path="/reunioes" exact component={Reunioes} />
      <Route path="/prototipo" exact component={Prototipo} />
      <Route path="/metodologiaDefinicoes" exact component={MetodologiaDefinicoes} />
      <Route path="/gerenciamentoRiscos" exact component={GerenciamentoRiscos} />
      <Route path="/monitoramentoRiscos" exact component={MonitoramentoRiscos} />
      <Route path="/analiseprotocolo"  exact component={AnaliseProtocolo} />
      <Route path="/elicitacao" exact component={Elicitacao} />
      <Route path="/prerastreabilidade" exact component={PreRastreabilidade} />
      <Route path="/priorizacao" exact component={Priorizacao} />
      <Route path="/moscow" exact component={Moscow} />
      <Route path="/ftf" exact component={FirstThingsFirst} />
      <Route path="/modelagem" exact component={Modelagem} />
    </Switch>
  </BrowserRouter>
);
