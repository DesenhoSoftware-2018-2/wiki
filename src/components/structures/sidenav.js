import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";

const homePath = {
  pathname: "/"
};

const background = require("../../assets/imgs/background.jpeg");

class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.state = { button: "expand_more" };
  }

  componentDidMount() {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});

    var elem = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elem, {});
  }

  render() {
    const dynamics = [
      {
        dynamic: "Dinâmica I",
        artefacts: [
          { name: "Pré-Rastreabilidade", link: "/prerastreabilidade" },
          { name: "Elicitação", link: "/elicitacao" },
          { name: "Priorização", link: "/priorizacao" },
          { name: "Modelagem", link: "/modelagem" }
        ]
      },
      { dynamic: "Dinâmica II",
        artefacts: [
          { name: "Metodologia e Definições", link: "/metodologiaDefinicoes" },
          { name: "Gerenciamento de Riscos", link: "/gerenciamentoRiscos" },
          { name: "Monitoramento e Controle Riscos", link: "/monitoramentoRiscos" },
          { name: "Documento de Visão", link: "/docVisao" }
        ]
      },
      { dynamic: "Dinâmica III", artefacts: [] },
      { dynamic: "Dinâmica IV", artefacts: [] },
      { dynamic: "Dinâmica V", artefacts: [] }
    ];

    const extras = [
      { name: "Plano de Comunicacao", link: "/planoComunicacao" },
      { name: "Guia de Contribuição", link: "/guiaContribuicao" },
      { name: "Reuniões", link: "/reunioes" },
      { name: "Fotos", link: "/fotos" },
      { name: "Referência Bibliográfica", link:"/referencia"}
    ];

    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src={background} alt="background" />
              </div>
              <Link to={homePath}>
                <span className="white-text name">Nome do grupo</span>
              </Link>
              <Link to={homePath}>
                <span className="white-text email">Repositório</span>
              </Link>
            </div>
          </li>
          <li>
            <Link to={homePath} onClick={() => M.AutoInit()}>
              Home
            </Link>
          </li>
          <li>
            <div className="divider" />
          </li>
          <ul className="collapsible">
            {dynamics.map((dynamic, i) => {
              return (
                <li key={i}>
                  <div className="collapsible-header">
                    <div className="dinamica">{dynamic.dynamic}</div>
                    <div className="dinamica-button">
                      <i className="material-icons">{this.state.button}</i>
                    </div>
                  </div>
                  <div className="collapsible-body">
                    <ul>
                      {dynamic.artefacts.map((artefact, i) => {
                        return (
                          <li key={i}>
                            <Link
                              to={artefact.link}
                              onClick={() => M.AutoInit()}
                            >
                              <div className="artifact">{artefact.name}</div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
            <li>
              <div className="divider" />
            </li>
            <li>
              <div className="collapsible-header">
                <div className="dinamica">Extras</div>
                <div className="dinamica-button">
                  <i className="material-icons">{this.state.button}</i>
                </div>
              </div>
              <div className="collapsible-body">
                <ul>
                  {extras.map((extra, i) => {
                    return (
                      <li key={i}>
                        <Link to={extra.link} onClick={() => M.AutoInit()}>
                          <div className="artifact">{extra.name}</div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          </ul>
        </ul>
        <a data-target="slide-out" className="sidenav-trigger sidenav-teste pulse waves-effect">
          <i className="material-icons small">menu</i>
        </a>
      </div>
    );
  }
}
export default Sidenav;
