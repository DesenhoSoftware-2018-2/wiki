import React, { Component } from "react";
import Markdown from '../../../structures/dynamicsComponents/markdown';
import PreRastreabilidadeNav from "./pre-rastreabilidadeNav";

class Lexicos extends Component {
  render() {
    return (
      <div>
        <PreRastreabilidadeNav />
        <div className="container">
          <Markdown file="dinamica01/pre-rastreabilidade/lexicos" />
        </div>
      </div>
    );
  }
} export default Lexicos;
