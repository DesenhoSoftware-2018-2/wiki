import React, { Component } from 'react';
import Sidenav from "../../structures/sidenav";
import Navbar from "../../structures/dynamicsComponents/navbar";
import Markdown from '../../structures/dynamicsComponents/markdown';

const artefatos = [
  { pathname: "/argumentacoes", link: "Entender" },
  { pathname: "/richpictures", link: "Esboçar" },
  { pathname: "/5w2h", link: "Decidir" },
  { pathname: "/argumentacoes", link: "Prototipar" },
  { pathname: "/designsprint", link: "Testar"}
];


class DesignSprint extends Component {
    render() {
        return (
          <div>
            <Sidenav />
            <Navbar activities={artefatos} />
            <div className="container">
              <Markdown file="dinamica01/designsprint" />
            </div>
          </div>
        );
    }
}

export default DesignSprint;