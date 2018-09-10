import React, { Component } from "react";
import Markdown from '../../../structures/dynamicsComponents/markdown';
import PreRastreabilidadeNav from "./pre-rastreabilidadeNav";

class wh extends Component {
  render() {
    return (
      <div>
        <PreRastreabilidadeNav />
        <div className="container">
          <Markdown file="dinamica01/pre-rastreabilidade/5w2h" />
        </div>
      </div>
    );
  }
} export default wh;
