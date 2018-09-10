import React, { Component } from "react";
import Markdown from '../../../structures/dynamicsComponents/markdown';
import PreRastreabilidadeNav from "./pre-rastreabilidadeNav";

class Richpictures extends Component {
  render() {
    return (
      <div>
        <PreRastreabilidadeNav />
        <div className="container">
          <Markdown file="dinamica01/pre-rastreabilidade/richpictures" />
        </div>
      </div>
    );
  }
} export default Richpictures;
