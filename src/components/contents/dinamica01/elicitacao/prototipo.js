import React, { Component } from "react";
import Dinamica02 from '../dinamica01';
import Markdown from '../../../structures/dynamicsComponents/markdown';

class Prototipo extends Component {
  render() {
    return (
      <div>
        <Dinamica02 />
        <div className="container">
          <Markdown file="dinamica01/elicitacao/prototipo" />
        </div>
      </div>
    );
  }
} export default Prototipo;
