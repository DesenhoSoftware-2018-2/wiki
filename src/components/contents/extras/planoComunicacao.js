import React, { Component } from "react";
import Extras from './extras';
import Markdown from '../../structures/dynamicsComponents/markdown';

class PlanoComunicacao extends Component {
  render() {
    return (
      <div>
        <Extras />
        <div className="container">
          <Markdown file="extras/planoComunicacao" />
        </div>
      </div>
    );
  }
}

export default PlanoComunicacao;
