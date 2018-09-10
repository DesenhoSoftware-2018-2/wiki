import React, { Component } from "react";
import Markdown from '../../../structures/dynamicsComponents/markdown';
import PreRastreabilidadeNav from "./elicitacaoNav";

class Brainstorming extends Component {
  render() {
    return (
      <div>
        <PreRastreabilidadeNav />
        <div className="container">
          <Markdown file="dinamica01/elicitacao/brainstorming" />
        </div>
      </div>
    );
  }
} export default Brainstorming;
