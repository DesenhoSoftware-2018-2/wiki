import React, {Component} from 'react';
import DesignSprintNavbar from './designsprintNavbar';
import Markdown from '../../../structures/dynamicsComponents/markdown';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

const objetivo = require("../../../../assets/imgs/designSprint/primeiro/objetivo.jpg");
const pessimismo = require("../../../../assets/imgs/designSprint/primeiro/pessimismo.jpg");
const ishikawa = require("../../../../assets/imgs/designSprint/primeiro/ishikawa.jpg");
const fluxo_usuario = require("../../../../assets/imgs/designSprint/primeiro/fluxo_usuario.jpg");
const mapa_mental = require("../../../../assets/imgs/designSprint/primeiro/mapa_mental.jpg");
const cp = require("../../../../assets/imgs/designSprint/primeiro/cp.jpg");
const cp_organizado = require("../../../../assets/imgs/designSprint/primeiro/cp_organizado.jpg");
const cp_usuario = require("../../../../assets/imgs/designSprint/primeiro/cp_usuario.jpg");
const publico_alvo = require("../../../../assets/imgs/designSprint/primeiro/publico_alvo.jpg");

const img2 = require("../../../../assets/imgs/designSprint/primeiro/img2.jpg");
const img1 = require("../../../../assets/imgs/designSprint/primeiro/img1.jpg");
const img3 = require("../../../../assets/imgs/designSprint/primeiro/img3.jpg");
const img4 = require("../../../../assets/imgs/designSprint/primeiro/img4.jpg");
const img5 = require("../../../../assets/imgs/designSprint/primeiro/img5.jpg");
const img6 = require("../../../../assets/imgs/designSprint/primeiro/img6.jpg");
const img7 = require("../../../../assets/imgs/designSprint/primeiro/img7.jpg");
const img8 = require("../../../../assets/imgs/designSprint/primeiro/img8.jpg");

class Primeiro extends Component{

    render() {
        return(
            <div>
                <DesignSprintNavbar />
                <div className="container">
                <div className="designPhotos">
                    <Markdown file="dinamica01/designSprint/primeiro"/>
                    <div>
                         <h5>Objetivo a Longo Prazo</h5>
                         <ReactFancyBox thumbnail={objetivo} image={objetivo}/>
                    </div>
                    <div>
                         <h5>Perguntas Pessimistas</h5>
                         <ReactFancyBox thumbnail={pessimismo} image={pessimismo}/>
                    </div>
                    <div>
                         <h5>Mapa de Causa e Efeito</h5>
                         <ReactFancyBox thumbnail={ishikawa} image={ishikawa}/>
                    </div>
                    <div>
                         <h5>Mapa do fluxo do usuário - Versão 1</h5>
                         <ReactFancyBox thumbnail={fluxo_usuario} image={fluxo_usuario}/>
                    </div>
                    <div>
                         <h5>Mapa mental</h5>
                         <ReactFancyBox thumbnail={mapa_mental} image={mapa_mental}/>
                    </div>
                    <div>
                         <h5>Como Poderíamos</h5>
                         <ReactFancyBox thumbnail={cp} image={cp}/>
                    </div>
                    <div>
                         <h5>Como Poderíamos Organizados em Categorias</h5>
                         <ReactFancyBox thumbnail={cp_organizado} image={cp_organizado}/>
                    </div>
                    <div>
                         <h5>Exemplo de CPs da Categoria Usuário</h5>
                         <ReactFancyBox thumbnail={cp_usuario} image={cp_usuario}/>
                    </div>
                    <div>
                         <h5>Definição de Público Alvo</h5>
                         <ReactFancyBox thumbnail={publico_alvo} image={publico_alvo}/>
                    </div>
                </div>
                <div>
                    <br />
                    <h2>Outras Imagens</h2>
                    <div className="designPhotos">
                        <ReactFancyBox thumbnail={img1} image={img1}/>
                        <ReactFancyBox thumbnail={img2} image={img2}/>
                        <ReactFancyBox thumbnail={img3} image={img3}/>
                        <ReactFancyBox thumbnail={img4} image={img4}/>
                        <ReactFancyBox thumbnail={img5} image={img5}/>
                        <ReactFancyBox thumbnail={img6} image={img6}/>
                        <ReactFancyBox thumbnail={img7} image={img7}/>
                        <ReactFancyBox thumbnail={img8} image={img8}/>      
                    </div>
                </div>
                </div>
            </div>
        );
    }

} export default Primeiro;