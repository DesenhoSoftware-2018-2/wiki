import React, { Component } from 'react';

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
            <div className="custom">
                <div>
                    <h4>Logo</h4>
                    <img src={logo} alt="logo"/>
                </div>
                <div>
                    <h4>Login</h4>   
                    <img src={login} alt="login"/>
                </div>
                <div>
                    <h4>Home</h4>
                    <img src={home} alt="home"/>
                </div>
                <div>
                    <h4>Criar Monitoria</h4> 
                    <img src={criar_monitoria} alt="criar monitoria"/>
                </div>
                <div>
                    <h4>Busca</h4>
                    <img src={busca} alt="busca"/>
                </div>
                <div>
                    <h4>Conferência</h4>
                    <img src={conferencia} alt="conferencia"/>
                </div>
                <div>
                     <h4>Monitoria</h4>
                    <img src={monitoria} alt="monitoria"/>
                </div>
                <div>
                     <h4>Match</h4>
                    <img src={match} alt="match"/>
                </div>
                <div>
                    <h4>Chat</h4>
                    <img src={chat} alt="chat"/>
                </div>
                <div>    
                    <h4>Sidenav</h4>
                    <img src={sidenav} alt="sidenav"/>
                </div>
                <div>
                    <h4>Perfil</h4>
                    <img src={perfil} alt="perfil"/>
                </div>
                <div>
                    <h4>Relatório</h4>
                    <img src={relatorio} alt="relatório"/>
                </div>
                <div>
                    <h4>Avaliação</h4>
                    <img src={avaliacao} alt="avaliacao"/>
                </div>
            </div>
        );
    }

} export default PrototipoImgs;