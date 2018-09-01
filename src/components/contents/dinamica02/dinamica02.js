import React, { Component } from "react";
import Navbar from "../../structures/dynamicsComponents/navbar";
import Sidenav from "../../structures/sidenav";

class Dinamica02 extends Component {
  render() {
    const artefatos = [
      { pathname: "/metodologiaDefinicoes", link: "Metodologia e Definições" }
    ];

    return (
      <div>
        <Sidenav />
        <Navbar activities={artefatos} />
      </div>
    );
  }
}

export default Dinamica02;
