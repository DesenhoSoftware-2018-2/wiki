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
import DesignSprint from '../components/contents/dinamica01/designSprint/designsprint';
import Primeiro from '../components/contents/dinamica01/designSprint/primeiro';
import Segundo from '../components/contents/dinamica01/designSprint/segundo';
import Terceiro from '../components/contents/dinamica01/designSprint/terceiro';
import Quarto from '../components/contents/dinamica01/designSprint/quarto';
import Quinto from '../components/contents/dinamica01/designSprint/quinto';
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
import AnaliseDiscurso from '../components/contents/dinamica01/elicitacao/analiseDiscurso';
import Entrevistas from '../components/contents/dinamica01/elicitacao/entrevistas';
import DocVisao from '../components/contents/dinamica02/docVisao';
import Nfr from '../components/contents/dinamica03/nfr';
import iStar from '../components/contents/dinamica03/iStar';
import Lexicos from '../components/contents/dinamica01/pre-rastreabilidade/lexicos';
import Questionario from '../components/contents/dinamica01/elicitacao/questionario';

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
      <Route path="/designsprint" exact component={DesignSprint} />
      <Route path="/entender" exact component={Primeiro} />
      <Route path="/esbocar" exact component={Segundo} />
      <Route path="/decidir" exact component={Terceiro} />
      <Route path="/prototipar" exact component={Quarto} />
      <Route path="/testar" exact component={Quinto} />
      <Route path="/analiseprotocolo"  exact component={AnaliseProtocolo} />
      <Route path="/elicitacao" exact component={Elicitacao} />
      <Route path="/prerastreabilidade" exact component={PreRastreabilidade} />
      <Route path="/priorizacao" exact component={Priorizacao} />
      <Route path="/moscow" exact component={Moscow} />
      <Route path="/ftf" exact component={FirstThingsFirst} />
      <Route path="/modelagem" exact component={Modelagem} />
      <Route path="/analisediscurso"  exact component={AnaliseDiscurso} />
      <Route path="/entrevistas"  exact component={Entrevistas} />
      <Route path="/docvisao"  exact component={DocVisao} />
      <Route path="/nfr"  exact component={Nfr} />
      <Route path="/istar" exact component={iStar} />
      <Route path="/lexicos" exact component={Lexicos} />
      <Route path="/questionario" exact component={Questionario} />
    </Switch>
  </BrowserRouter>
);
