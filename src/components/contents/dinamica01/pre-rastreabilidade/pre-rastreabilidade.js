import React, { Component } from "react";
import Markdown from "../../../structures/dynamicsComponents/markdown";
import PreRastreabilidadeNav from "./pre-rastreabilidadeNav";

class PreRastreabilidade extends Component {
  render() {
    return (
      <div>
        <PreRastreabilidadeNav />
        <div className="container">
          <Markdown file="dinamica01/pre-rastreabilidade/pre-rastreabilidade" />
        </div>
      </div>
    );
  }
} export default PreRastreabilidade;