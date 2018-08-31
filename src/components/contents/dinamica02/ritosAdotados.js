import React, { Component } from "react";
import Dinamica01 from './dinamica02';
import Markdown from '../../structures/dynamicsComponents/markdown';

class RitosAdotados extends Component {
  render() {
    return (
      <div>
        <Dinamica01 />
        <div className="container">
          <Markdown file="dinamica02/ritosAdotados" />
        </div>
      </div>
    );
  }
} export default RitosAdotados;
