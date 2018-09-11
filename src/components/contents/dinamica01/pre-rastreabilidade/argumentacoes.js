import React, { Component } from "react";
import Markdown from '../../../structures/dynamicsComponents/markdown';
import PreRastreabilidadeNav from "./pre-rastreabilidadeNav";

class Argumentacoes extends Component {
  render() {
    return (
      <div>
        <PreRastreabilidadeNav />
        <div className="container">
          <Markdown file="dinamica01/pre-rastreabilidade/argumentacao01" />
        </div>
      </div>
    );
  }
} export default Argumentacoes;
