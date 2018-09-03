import React, { Component } from "react";
import Dinamica01 from './dinamica02';
import Markdown from '../../structures/dynamicsComponents/markdown';

class MonitoramentoRiscos extends Component {
  render() {
    return (
      <div>
        <Dinamica01 />
        <div className="container">
          <Markdown file="dinamica02/monitoramentoRiscos" />
        </div>
      </div>
    );
  }
} export default MonitoramentoRiscos;
