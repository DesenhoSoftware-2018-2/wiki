import React, { Component } from "react";
import Navbar from "../../structures/dynamicsComponents/navbar";
import Sidenav from "../../structures/sidenav";

class Dinamica01 extends Component {
  render() {
    const artefatos = [
      { pathname: "/argumentacoes", link: "Argumentações" },
      { pathname: "/richpictures", link: "Rich Pictures" }
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
