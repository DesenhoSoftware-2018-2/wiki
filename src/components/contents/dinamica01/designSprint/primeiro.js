import React, {Component} from 'react';
import DesignSprintNavbar from './designsprintNavbar';
import Markdown from '../../../structures/dynamicsComponents/markdown';

const objetivo = require("../../../../assets/imgs/designSprint/objetivo.jpg");
const pessimismo = require("../../../../assets/imgs/designSprint/pessimismo.jpg");
const ishikawa = require("../../../../assets/imgs/designSprint/ishikawa.jpg");
const fluxo_usuario = require("../../../../assets/imgs/designSprint/fluxo_usuario.jpg");
const mapa_mental = require("../../../../assets/imgs/designSprint/mapa_mental.jpg");
const cp = require("../../../../assets/imgs/designSprint/cp.jpg");
const cp_organizado = require("../../../../assets/imgs/designSprint/cp_organizado.jpg");
const cp_usuario = require("../../../../assets/imgs/designSprint/cp_usuario.jpg");
const publico_alvo = require("../../../../assets/imgs/designSprint/publico_alvo.jpg");

const img1 = require("../../../../assets/imgs/designSprint/img1.jpg");
const img2 = require("../../../../assets/imgs/designSprint/img2.jpg");
const img3 = require("../../../../assets/imgs/designSprint/img3.jpg");
const img4 = require("../../../../assets/imgs/designSprint/img4.jpg");
const img5 = require("../../../../assets/imgs/designSprint/img5.jpg");
const img6 = require("../../../../assets/imgs/designSprint/img6.jpg");
const img7 = require("../../../../assets/imgs/designSprint/img7.jpg");
const img8 = require("../../../../assets/imgs/designSprint/img8.jpg");

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
                         <img src={objetivo} />
                    </div>
                    <div>
                         <h5>Perguntas Pessimistas</h5>
                         <img src={pessimismo} />
                    </div>
                    <div>
                         <h5>Mapa de Causa e Efeito</h5>
                         <img src={ishikawa} />
                    </div>
                    <div>
                         <h5>Mapa do fluxo do usuário - Versão 1</h5>
                         <img src={fluxo_usuario} />
                    </div>
                    <div>
                         <h5>Mapa mental</h5>
                         <img src={mapa_mental} />
                    </div>
                    <div>
                         <h5>Como Poderíamos</h5>
                         <img src={cp} />
                    </div>
                    <div>
                         <h5>Como Poderíamos Organizados em Categorias</h5>
                         <img src={cp_organizado} />
                    </div>
                    <div>
                         <h5>Exemplo de CPs da Categoria Usuário</h5>
                         <img src={cp_usuario} />
                    </div>
                    <div>
                         <h5>Definição de Público Alvo</h5>
                         <img src={publico_alvo} />
                    </div>
                </div>
                <div>
                    <br />
                    <h2>Outras Imagens</h2>
                    <div className="designPhotos">
                    <img src={img1} />
                    <img src={img2} />
                    <img src={img3} />
                    <img src={img4} />
                    <img src={img5} />
                    <img src={img6} />
                    <img src={img7} />
                    <img src={img8} />
                    </div>
                </div>
                </div>
            </div>
        );
    }

} export default Primeiro;