import React, { Component } from "react";
import Dinamica04 from './dinamica04';
import Markdown from '../../structures/dynamicsComponents/markdown';

class DocArquitetura extends Component {
  render() {
    return (
      <div>
        <Dinamica04 />
        <div className="container">
          <Markdown file="dinamica04/docArquitetura" />
        </div>
      </div>
    );
  }
} export default DocArquitetura;
