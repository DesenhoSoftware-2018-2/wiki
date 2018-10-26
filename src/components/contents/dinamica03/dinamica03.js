import React, { Component } from "react";
import Navbar from "../../structures/dynamicsComponents/navbar";
import Sidenav from "../../structures/sidenav";

class Dinamica03 extends Component {
  render() {
    const artefatos = [
      { pathname: "/nfr", link: "NFR Framework" }

    ];

    return (
      <div>
        <Sidenav />
        <Navbar activities={artefatos} />
      </div>
    );
  }
}

export default Dinamica03;
