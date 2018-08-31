import React, { Component } from "react";
import Dinamica01 from './dinamica02';
import Markdown from '../../structures/dynamicsComponents/markdown';

class MetodologiaDefinicoes extends Component {
  render() {
    return (
      <div>
        <Dinamica01 />
        <div className="container">
          <Markdown file="dinamica02/metodologiaDefinicoes" />
        </div>
      </div>
    );
  }
} export default MetodologiaDefinicoes;
