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
          { name: "RichPicture", link: "/dinamica" },
          { name: "Lexico", link: "/dinamica" }
        ]
      },
      { dynamic: "Dinâmica II", artefacts: [] },
      { dynamic: "Dinâmica III", artefacts: [] },
      { dynamic: "Dinâmica IV", artefacts: [] },
      { dynamic: "Dinâmica V", artefacts: [] }
    ];

    const extras = [
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
            {dynamics.map(dynamic => {
              return (
                <li>
                  <div className="collapsible-header">
                    <div className="dinamica">{dynamic.dynamic}</div>
                    <div className="dinamica-button">
                      <i class="material-icons">{this.state.button}</i>
                    </div>
                  </div>
                  <div className="collapsible-body">
                    <ul>
                      {dynamic.artefacts.map(artefact => {
                        return (
                          <li>
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
                  <i class="material-icons">{this.state.button}</i>
                </div>
              </div>
              <div className="collapsible-body">
                <ul>
                  {extras.map(extra => {
                    return (
                      <li>
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
        <a data-target="slide-out" className="sidenav-trigger sidenav-teste">
          <i className="material-icons small">menu</i>
        </a>
      </div>
    );
  }
}
export default Sidenav;
