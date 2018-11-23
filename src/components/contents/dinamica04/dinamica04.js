import React, { Component } from "react";
import Navbar from "../../structures/dynamicsComponents/navbar";
import Sidenav from "../../structures/sidenav";

class Dinamica04 extends Component {
  render() {
    const artefatos = [
      { pathname: "/docArquitetura", link: "Documento de Arquitetura" },
      { pathname: "/padroesProjeto", link: "Padrões de Projeto" }

    ];

    return (
      <div>
        <Sidenav />
        <Navbar activities={artefatos} />
      </div>
    );
  }
}

export default Dinamica04;
