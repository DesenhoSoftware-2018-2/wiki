import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";

const homePath = {
  pathname: "/"
};

const dinamica = {
  pathname: "/dinamica"
};

const background = require('../../assets/imgs/background.jpeg');

class Sidenav extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems, {});

    var elem = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elem, {});
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img
                  src={background}
                  alt="background"
                />
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
          <ul class="collapsible">
            <li>
              <div class="collapsible-header">Dinâmica I</div>
              <div class="collapsible-body">
                <ul>
                  <li>
                    <Link to={dinamica} onClick={() => M.AutoInit()}>
                      Dinamica
                    </Link>
                  </li>
                  <li>
                    <Link to={homePath} onClick={() => M.AutoInit()}>
                      Link 2
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <div class="collapsible-header">Dinâmica II</div>
              <div class="collapsible-body" />
            </li>
            <li>
              <div class="collapsible-header">Dinâmica III</div>
              <div class="collapsible-body" />
            </li>
            <li>
              <div class="collapsible-header">Dinâmica VI</div>
              <div class="collapsible-body" />
            </li>
            <li>
              <div class="collapsible-header">Dinâmica V</div>
              <div class="collapsible-body" />
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
