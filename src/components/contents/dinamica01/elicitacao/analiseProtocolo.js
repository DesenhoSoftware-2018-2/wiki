import React, { Component } from "react";
import Markdown from "../../../structures/dynamicsComponents/markdown";
import ElicitacaoNav from "./elicitacaoNav";

class AnaliseProtocolo extends Component {
  render() {
    return (
      <div>
        <ElicitacaoNav />
        <div className="container">
          <Markdown file="dinamica01/elicitacao/analiseProtocolo" />
        </div>
      </div>
    );
  }
} export default AnaliseProtocolo;
