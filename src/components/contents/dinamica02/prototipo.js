import React, { Component } from "react";
import Dinamica02 from './dinamica02';
import Markdown from '../../structures/dynamicsComponents/markdown';

class Prototipo extends Component {
  render() {
    return (
      <div>
        <Dinamica02 />
        <div className="container">
          <Markdown file="dinamica02/prototipo" />
        </div>
      </div>
    );
  }
} export default Prototipo;
