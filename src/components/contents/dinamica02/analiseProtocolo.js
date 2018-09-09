import React, { Component } from "react";
import Dinamica02 from './dinamica02';
import Markdown from '../../structures/dynamicsComponents/markdown';

class AnaliseProtocolo extends Component {
  render() {
    return (
      <div>
        <Dinamica02 />
        <div className="container">
          <Markdown file="dinamica02/analiseProtocolo" />
        </div>
      </div>
    );
  }
} export default AnaliseProtocolo;
