import React, { Component } from "react";
import Dinamica02 from './dinamica02';
import Markdown from '../../structures/dynamicsComponents/markdown';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
const modelagemProcessoImage = require("../../../assets/imgs/dinamica02/modelagem_processo.png");

class ModelagemProcesso extends Component {
  render() {
    return (
      <div>
        <Dinamica02 />
        <div className="container">
        <div className="designPhotos">
          <h1>Modelagem de Processo</h1>
          <div className="modelagem-photo">
            <ReactFancyBox thumbnail={modelagemProcessoImage} image={modelagemProcessoImage}/>
          </div>
          <Markdown file="dinamica02/modelagem_processo" />
        </div>
        </div>
      </div>
    );
  }
} export default ModelagemProcesso;
