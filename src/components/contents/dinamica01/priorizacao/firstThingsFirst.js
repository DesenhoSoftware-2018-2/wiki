import React, { Component } from "react";
import Markdown from '../../../structures/dynamicsComponents/markdown';
import PriorizacaoNav from './priorizacaoNav';

class FirstThingsFirst extends Component {
  render() {
    return (
      <div>
        <PriorizacaoNav />
        <div className="container">
          <Markdown file="dinamica01/priorizacao/firstThingsFirst" />
        </div>
      </div>
    );
  }
} export default FirstThingsFirst;
