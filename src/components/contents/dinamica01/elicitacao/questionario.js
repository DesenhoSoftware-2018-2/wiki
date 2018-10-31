import React, { Component } from "react";
import ElicitacaoNav from "./elicitacaoNav";
import Markdown from "../../../structures/dynamicsComponents/markdown";

class Questionario extends Component {
  render() {
    return (
      <div>
        <ElicitacaoNav />
        <div className="container">
          <Markdown file="dinamica01/elicitacao/questionario" />
        </div>
      </div>
    );
  }
} export default Questionario;