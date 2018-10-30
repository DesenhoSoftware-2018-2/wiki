import React, {Component} from 'react';
import DesignSprintNavbar from './designsprintNavbar';
import Markdown from '../../../structures/dynamicsComponents/markdown';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

const pp1 = require("../../../../assets/imgs/designSprint/terceiro/pp1.jpg");
const pp2 = require("../../../../assets/imgs/designSprint/terceiro/pp2.jpg");
const pp3 = require("../../../../assets/imgs/designSprint/terceiro/pp3.jpg");
const pp4 = require("../../../../assets/imgs/designSprint/terceiro/pp4.jpg");
const pp5 = require("../../../../assets/imgs/designSprint/terceiro/pp5.jpg");
const pp6 = require("../../../../assets/imgs/designSprint/terceiro/pp6.jpg");

const img1 = require("../../../../assets/imgs/designSprint/terceiro/img1.jpg");
const img2 = require("../../../../assets/imgs/designSprint/terceiro/img2.jpg");
const img3 = require("../../../../assets/imgs/designSprint/terceiro/img3.jpg");
const img4 = require("../../../../assets/imgs/designSprint/terceiro/img4.jpg");
const img5 = require("../../../../assets/imgs/designSprint/terceiro/img5.jpg");

const sb1 = require("../../../../assets/imgs/designSprint/terceiro/sb1.jpg");
const sb2 = require("../../../../assets/imgs/designSprint/terceiro/sb2.jpg");
const sb3 = require("../../../../assets/imgs/designSprint/terceiro/sb3.jpg");
const sb4 = require("../../../../assets/imgs/designSprint/terceiro/sb4.jpg");
const sb5 = require("../../../../assets/imgs/designSprint/terceiro/sb5.jpg");
const sb6 = require("../../../../assets/imgs/designSprint/terceiro/sb6.jpg");
const sb7 = require("../../../../assets/imgs/designSprint/terceiro/sb7.jpg");
const sb9 = require("../../../../assets/imgs/designSprint/terceiro/sb9.jpg");
const sb10 = require("../../../../assets/imgs/designSprint/terceiro/sb10.jpg");
const sb11 = require("../../../../assets/imgs/designSprint/terceiro/sb11.jpg");
const sb12 = require("../../../../assets/imgs/designSprint/terceiro/sb12.jpg");
const sb13 = require("../../../../assets/imgs/designSprint/terceiro/sb13.jpg");
const sb14 = require("../../../../assets/imgs/designSprint/terceiro/sb14.jpg");
const sb15 = require("../../../../assets/imgs/designSprint/terceiro/sb15.jpg");
const sb16 = require("../../../../assets/imgs/designSprint/terceiro/sb16.jpg");
const sb17 = require("../../../../assets/imgs/designSprint/terceiro/sb17.jpg");

class Terceiro extends Component{

    render() {
        return(
            <div>
                <DesignSprintNavbar />
                <div className="container">
                    <div className="designPhotos">  
                        <Markdown file="dinamica01/designSprint/terceiro"/>
                        <ReactFancyBox thumbnail={pp1} image={pp1}/>
                        <ReactFancyBox thumbnail={pp2} image={pp2}/>
                        <ReactFancyBox thumbnail={pp3} image={pp3}/>
                        <ReactFancyBox thumbnail={pp4} image={pp4}/>
                        <ReactFancyBox thumbnail={pp5} image={pp5}/>
                        <ReactFancyBox thumbnail={pp6} image={pp6}/>
                    </div>
                    <h3>Storyboard</h3>
                        <div className="designPhotos">  
                            <div>
                                <h5>Entrada App</h5>
                                <ReactFancyBox thumbnail={sb1} image={sb1}/>
                            </div>
                            <div>
                                <h5>Login / Cadastro</h5>
                                <ReactFancyBox thumbnail={sb2} image={sb2}/>
                            </div>
                            <div>
                                <h5>Home - Monitoria</h5>
                                <ReactFancyBox thumbnail={sb3} image={sb3}/>
                            </div>
                            <div>
                                <h5>Home - Conferência</h5>
                                <ReactFancyBox thumbnail={sb4} image={sb4}/>
                            </div>
                            <div>
                                <h5>Adicionar</h5>
                                <ReactFancyBox thumbnail={sb5} image={sb5}/>
                            </div>
                            <div>
                                <h5>Criar Monitoria</h5>
                                <ReactFancyBox thumbnail={sb6} image={sb6}/>
                            </div>
                            <div>
                                <h5>Criar Conferência</h5>
                                <ReactFancyBox thumbnail={sb7} image={sb7}/>
                            </div>
                            <div>
                                <h5>Detalhamento da Monitoria </h5>
                                <ReactFancyBox thumbnail={sb9} image={sb9}/>
                            </div>
                            <div>
                                <h5>Match</h5>
                                <ReactFancyBox thumbnail={sb10} image={sb10}/>
                            </div>
                            <div>
                                <h5>Chat</h5>
                                <ReactFancyBox thumbnail={sb11} image={sb11}/>
                            </div>
                            <div>
                                <h5>Perfil</h5>
                                <ReactFancyBox thumbnail={sb12} image={sb12}/>
                            </div>
                            <div>
                                <h5>Avaliação</h5>
                                <ReactFancyBox thumbnail={sb13} image={sb13}/>
                            </div>
                            <div>
                                <h5>Relatório</h5>
                                <ReactFancyBox thumbnail={sb14} image={sb14}/>
                            </div>
                            <div>
                                <h5>Busca</h5>
                                <ReactFancyBox thumbnail={sb15} image={sb15}/>
                            </div>
                            <div>
                                <h5>Sidebar</h5>
                                <ReactFancyBox thumbnail={sb16} image={sb16}/>
                            </div>
                            <div>
                                <h5>Geral</h5>
                                <ReactFancyBox thumbnail={sb17} image={sb17}/>
                            </div>
                        </div>
                    <h3>Outras Imagens</h3>
                    <div className="designPhotos">
                        <ReactFancyBox thumbnail={img1} image={img1}/>
                        <ReactFancyBox thumbnail={img2} image={img2}/>
                        <ReactFancyBox thumbnail={img3} image={img3}/>
                        <ReactFancyBox thumbnail={img4} image={img4}/>
                        <ReactFancyBox thumbnail={img5} image={img5}/>
                    </div>
                </div>
            </div>
        );
    }

} export default Terceiro;