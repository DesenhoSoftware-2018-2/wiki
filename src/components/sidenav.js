import React, { Component } from "react";
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.css';

const homePath = {
  pathname: '/',
};

class Sidenav extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="https://pixels.com/displayartwork.html?id=2086211&width=300&height=350" alt="background" />
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
            <Link to={homePath}>Home</Link>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <Link to={homePath}>Dinâmica I</Link>
          </li>
          <li>
            <Link to={homePath}>Dinâmica II</Link>
          </li>
          <li>
            <Link to={homePath}>Dinâmica III</Link>
          </li>
          <li>
            <Link to={homePath}>Dinâmica IV</Link>
          </li>
          <li>
            <Link to={homePath}>Dinâmica V</Link>
          </li>
        </ul>
        <a data-target="slide-out" className="sidenav-trigger sidenav-teste">
          <i className="material-icons small">menu</i>
        </a>
      </div>
    );
  }
}
export default Sidenav;
