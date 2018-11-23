import React, { Component } from "react";
import Dinamica04 from './dinamica04';
import Markdown from '../../structures/dynamicsComponents/markdown';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

const classev10 = require("../../../assets/imgs/dinamica04/classev10.png");
const classev20 = require("../../../assets/imgs/dinamica04/classev20.png");
const classev30 = require("../../../assets/imgs/dinamica04/classev30.png");
const classev40 = require("../../../assets/imgs/dinamica04/classev40.png");
const der = require("../../../assets/imgs/dinamica04/der.jpg");
const logico = require("../../../assets/imgs/dinamica04/logico.jpg");

class DocArquitetura extends Component {
  render() {
    return (
      <div>
        <Dinamica04 />
        <div className="container">
        <div className="designPhotos">
          <Markdown file="dinamica04/docArquitetura" />
          <div>
              <h4>Diagrama de Classe</h4>
               <h5>Versão 1.0</h5>
               <ReactFancyBox thumbnail={classev10} image={classev10}/>
               <a href="https://drive.google.com/open?id=1saGul3uMC1MwvHsWvsVfkmQmEXl9ybcO">Acesse a imagem em tamanho maior aqui</a>
               <p>Autor: Grupo</p>
          </div>
          <div>
               <h5>Versão 2.0</h5>
               <ReactFancyBox thumbnail={classev20} image={classev20}/>
               <a href="https://drive.google.com/open?id=1Ak8YkBuyNfejZfW8WlxqQ4z8tzHPYa84">Acesse a imagem em tamanho maior aqui</a>
               <p>Autor: Grupo</p>
          </div>
          <div>
               <h5>Versão 3.0</h5>
               <ReactFancyBox thumbnail={classev30} image={classev30}/>
               <a href="https://drive.google.com/open?id=1PoWpUaeHpIrKpqwxiMmKTri5jJ3vfzV_">Acesse a imagem em tamanho maior aqui</a>
               <p>Autor: Isaque Alves</p>
          </div>
          <div>
               <h5>Versão 4.0</h5>
               <ReactFancyBox thumbnail={classev40} image={classev40}/>
               <a href="">Acesse a imagem em tamanho maior aqui</a>
               <p>Autor: Grupo</p>
          </div>
          <div>
               <h4>Diagrama de Bancos de Dados</h4>
               <h5>Diagrama Entidade Relacionamento</h5>
               <ReactFancyBox thumbnail={der} image={der}/>
               <p>Autor: Amanda Muniz, Isaque Alves</p>
          </div>
          <div>
               <h5>Lógico</h5>
               <ReactFancyBox thumbnail={logico} image={logico}/>
               <p>Autor: Amanda Muniz, Isaque Alves</p>
          </div>
        </div>
        </div>
      </div>
    );
  }
} export default DocArquitetura;
