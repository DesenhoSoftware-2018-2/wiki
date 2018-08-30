import React, { Component } from "react";
import Extras from './extras';
import Markdown from '../../structures/dynamicsComponents/markdown';

class GuiaContribuicao extends Component {
  render() {
    return (
      <div>
        <Extras />
        <div className="container">
          <Markdown file="extras/guiaContribuicao" />
        </div>
      </div>
    );
  }
}

export default GuiaContribuicao;
