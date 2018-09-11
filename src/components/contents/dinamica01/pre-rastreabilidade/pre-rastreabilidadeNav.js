import React, { Component } from "react";
import Sidenav from '../../../structures/sidenav';
import Navbar from '../../../structures/dynamicsComponents/navbar';

class PreRastreabilidadeNav extends Component {
  render() {
    const artefatos = [
      { pathname: "/prerastreabilidade", link: "Bio" },
      { pathname: "/5w2h", link: "5W2H" },
      { pathname: "/richpictures", link: "Rich Pictures"},
      { pathname: "/argumentacoes", link: "Argumentações"}
    ];

    return (
      <div>
        <Sidenav />
        <Navbar activities={artefatos} />
      </div>
    );
  }
}

export default PreRastreabilidadeNav;
 