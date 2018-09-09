import React, { Component } from "react";
import Sidenav from '../../../structures/sidenav';
import Navbar from '../../../structures/dynamicsComponents/navbar';

class PriorizacaoNav extends Component {
  render() {
    const artefatos = [
      { pathname: "/priorizacao", link: "Bio" },
      { pathname: "/moscow", link: "MoSCoW" },
      { pathname: "/ftf", link: "First Things First"}
    ];

    return (
      <div>
        <Sidenav />
        <Navbar activities={artefatos} />
      </div>
    );
  }
}

export default PriorizacaoNav;
 