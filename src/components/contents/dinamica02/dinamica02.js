import React, { Component } from "react";
import Navbar from "../../structures/dynamicsComponents/navbar";
import Sidenav from "../../structures/sidenav";

class Dinamica02 extends Component {
  render() {
    const artefatos = [
      { pathname: "/docVisao", link: "Documento de Visão" },
      { pathname: "/metodologiaDefinicoes", link: "Metodologia e Definições" },
      { pathname: "/gerenciamentoRiscos", link: "Plano de Gerenciamento de Riscos" },
      { pathname: "/monitoramentoRiscos", link: "Monitoramento e Controle dos Riscos" }

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
