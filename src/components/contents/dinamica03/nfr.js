import React, { Component } from "react";
import Dinamica02 from './dinamica03';
import Markdown from '../../structures/dynamicsComponents/markdown';

class Nfr extends Component {
  render() {
    return (
      <div>
        <Dinamica02 />
        <div className="container">
          <Markdown file="dinamica03/nfr" />
        </div>
      </div>
    );
  }
} export default Nfr;
