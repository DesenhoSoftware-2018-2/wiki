import React, { Component } from "react";
import Markdown from "../../../structures/dynamicsComponents/markdown";
import ModelagemNav from "./modelagemNav";

class Modelagem extends Component {
  render() {
    return (
      <div>
        <ModelagemNav />
        <div className="container">
          <Markdown file="dinamica01/modelagem/modelagem" />
        </div>
      </div>
    );
  }
} export default Modelagem;