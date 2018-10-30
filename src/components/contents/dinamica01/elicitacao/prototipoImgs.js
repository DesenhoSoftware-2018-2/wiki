import React, { Component } from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'


const logo = require("../../../../assets/imgs/prototipo/logo.png");
const login = require("../../../../assets/imgs/prototipo/login.png");
const home = require("../../../../assets/imgs/prototipo/home.png");
const criar_monitoria = require("../../../../assets/imgs/prototipo/criar_monitoria.png")
const busca = require("../../../../assets/imgs/prototipo/busca.jpg");
const conferencia = require("../../../../assets/imgs/prototipo/conferencia.png")
const monitoria = require("../../../../assets/imgs/prototipo/monitoria.png");
const match = require("../../../../assets/imgs/prototipo/match.png");
const chat = require("../../../../assets/imgs/prototipo/chat.png");
const sidenav = require("../../../../assets/imgs/prototipo/sidenav.png");
const perfil = require("../../../../assets/imgs/prototipo/perfil.png");
const relatorio = require("../../../../assets/imgs/prototipo/relatorio.png");
const avaliacao = require("../../../../assets/imgs/prototipo/avaliacao.png");

class PrototipoImgs extends Component{

    render(){
        return(
            <div className="designPhotos">
                <div>
                    <h4>Logo</h4>
                    <ReactFancyBox thumbnail={logo} image={logo}/>
                </div>
                <div>
                    <h4>Login</h4>   
                    <ReactFancyBox thumbnail={login} image={login}/>
                </div>
                <div>
                    <h4>Home</h4>
                    <ReactFancyBox thumbnail={home} image={home}/>
                </div>
                <div>
                    <h4>Criar Monitoria</h4> 
                    <ReactFancyBox thumbnail={criar_monitoria} image={criar_monitoria}/>
                </div>
                <div>
                    <h4>Busca</h4>
                    <ReactFancyBox thumbnail={busca} image={busca}/>
                </div>
                <div>
                    <h4>Conferência</h4>
                    <ReactFancyBox thumbnail={conferencia} image={conferencia}/>
                </div>
                <div>
                     <h4>Monitoria</h4>
                     <ReactFancyBox thumbnail={monitoria} image={monitoria}/>
                </div>
                <div>
                     <h4>Match</h4>
                     <ReactFancyBox thumbnail={match} image={match}/>
                </div>
                <div>
                    <h4>Chat</h4>
                    <ReactFancyBox thumbnail={chat} image={chat}/>
                </div>
                <div>    
                    <h4>Sidenav</h4>
                    <ReactFancyBox thumbnail={sidenav} image={sidenav}/>
                </div>
                <div>
                    <h4>Perfil</h4>
                    <ReactFancyBox thumbnail={perfil} image={perfil}/>
                </div>
                <div>
                    <h4>Relatório</h4>
                    <ReactFancyBox thumbnail={relatorio} image={relatorio}/>
                </div>
                <div>
                    <h4>Avaliação</h4>
                    <ReactFancyBox thumbnail={avaliacao} image={avaliacao}/>
                </div>
            </div>
        );
    }

} export default PrototipoImgs;