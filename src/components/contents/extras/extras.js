import React, { Component } from "react";
import Navbar from "../../structures/dynamicsComponents/navbar";
import Sidenav from "../../structures/sidenav";

class Extras extends Component {
  render() {
    const extras = [
      { pathname: "/planoComunicacao", link: "Plano de Comunicação" },
      { pathname: "/guiaContribuicao", link: "Guia de Contribuição" },
      { pathname: "/reunioes", link: "Reuniões" },
      { pathname: "/referencia", link: "Referência Bibliográfica" },
      { pathname: "/sprintPlanning", link: "Planejamento de Sprint"}
    ];

    return (
      <div>
        <Sidenav />
        <Navbar activities={extras} />
      </div>
    );
  }
}

export default Extras;
