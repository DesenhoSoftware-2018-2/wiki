import React, { Component } from "react";
import Markdown from '../../../structures/dynamicsComponents/markdown';
import PreRastreabilidadeNav from "./pre-rastreabilidadeNav";
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

const cadastroIsaque = require("../../../../assets/imgs/richpictures/richpictureCadastroIsaque.jpg");
const conceitualAmanda = require("../../../../assets/imgs/richpictures/richpictureConceitualAmanda.jpg");
const conceitualBruno = require("../../../../assets/imgs/richpictures/richpictureConceitualBruno.jpg");
const conceitualJoao = require("../../../../assets/imgs/richpictures/richpictureConceitualJoao.jpg");
const conceitualAtualizadoJoao = require("../../../../assets/imgs/richpictures/richpictureConceitualV2Joao.jpg");
const conceitualVitor = require("../../../../assets/imgs/richpictures/richpictureConceitualVitor.jpg");
const monitoriaIsaque = require("../../../../assets/imgs/richpictures/richpictureMonitoriaIsaque.jpg");

class Richpictures extends Component {
  render() {
    return (
      <div>
        <PreRastreabilidadeNav />
        <div className="container">
        <div className="designPhotos">
          <Markdown file="dinamica01/pre-rastreabilidade/richpictures" />
          <div>
            <h4>Cadastro do Usuário v1.0</h4>
            <ReactFancyBox thumbnail={cadastroIsaque} image={cadastroIsaque}/>
            <p>Autor: Isaque Alves</p>
          </div>
          <div>
            <h4>Fluxo de Monitoria v1.0</h4>
            <ReactFancyBox thumbnail={monitoriaIsaque} image={monitoriaIsaque}/>
            <p>Autor: Isaque Alves</p>
          </div>
          <div>
            <h4>Conceitual v1.0</h4>
            <ReactFancyBox thumbnail={conceitualAmanda} image={conceitualAmanda}/>
            <p>Autor: Amanda Muniz</p>
          </div>
          <div>
            <h4>Conceitual 2 v1.0</h4>
            <ReactFancyBox thumbnail={conceitualVitor} image={conceitualVitor}/>
            <p>Autor: Vitor Cardoso</p>
          </div>
          <div>
            <h4>Conceitual 3 v1.0</h4>
            <ReactFancyBox thumbnail={conceitualJoao} image={conceitualJoao}/>
            <p>Autor: João Vitor</p>
          </div>
          <div>
            <h4>Conceitual 3 v2.0</h4>
            <ReactFancyBox thumbnail={conceitualAtualizadoJoao} image={conceitualAtualizadoJoao}/>
            <p>Autor: João Vitor</p>
          </div>
          <div>
            <h4>Conceitual 3 v2.0</h4>
            <ReactFancyBox thumbnail={conceitualBruno} image={conceitualBruno}/>
            <p>Autor: Bruno Dantas</p>
          </div>
        </div>
        </div>
      </div>
    );
  }
} export default Richpictures;
