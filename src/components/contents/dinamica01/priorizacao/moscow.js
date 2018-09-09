import React, { Component } from "react";
import Markdown from '../../../structures/dynamicsComponents/markdown';
import PriorizacaoNav from './priorizacaoNav';

class Moscow extends Component {
  render() {
    return (
      <div>
        <PriorizacaoNav />
        <div className="container">
          <Markdown file="dinamica01/priorizacao/moscow" />
        </div>
      </div>
    );
  }
} export default Moscow;
