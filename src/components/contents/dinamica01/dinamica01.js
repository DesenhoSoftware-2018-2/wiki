import React, { Component } from "react";
import Navbar from "../../structures/dynamicsComponents/navbar";
import Sidenav from "../../structures/sidenav";

class Dinamica01 extends Component {
  render() {
    const artefatos = [
      { pathname: "/5w2h", link: "5w2h" },
      { pathname: "/richpictures", link: "Rich Pictures" },
      { pathname: "/argumentacoes", link: "Argumentações" },
      { pathname: "/prototipo", link: "Prototipo" },
      { pathname: "/analiseprotocolo", link: "Análise de Protocolo"}
    ];

    return (
      <div>
        <Sidenav />
        <Navbar activities={artefatos} />
      </div>
    );
  }
}

export default Dinamica01;
