import React, { Component } from "react";
import ElicitacaoNav from "./elicitacaoNav";
import Markdown from "../../../structures/dynamicsComponents/markdown";

class Elicitacao extends Component {
  render() {
    return (
      <div>
        <ElicitacaoNav />
        <div className="container">
          <Markdown file="dinamica01/elicitacao/elicitacao" />
        </div>
      </div>
    );
  }
} export default Elicitacao;