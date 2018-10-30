import React, { Component } from "react";
import Markdown from '../../../structures/dynamicsComponents/markdown';
import ElicitacaoNav from "./elicitacaoNav";
import PrototipoImgs from './prototipoImgs';

class Prototipo extends Component {
  render() {
    return (
      <div>
        <ElicitacaoNav />
        <div className="container">
          <Markdown file="dinamica01/elicitacao/prototipo" />
          <PrototipoImgs />
        </div>
      </div>
    );
  }
} export default Prototipo;
