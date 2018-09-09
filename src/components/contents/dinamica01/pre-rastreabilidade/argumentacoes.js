import React, { Component } from "react";
import Dinamica01 from '../dinamica01';
import Markdown from '../../../structures/dynamicsComponents/markdown';

class Argumentacoes extends Component {
  render() {
    return (
      <div>
        <Dinamica01 />
        <div className="container">
          <Markdown file="dinamica01/pre-rastreabilidade/argumentacao01" />
        </div>
      </div>
    );
  }
} export default Argumentacoes;
