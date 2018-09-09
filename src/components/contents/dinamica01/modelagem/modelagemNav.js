import React, { Component } from "react";
import Sidenav from '../../../structures/sidenav';
import Navbar from '../../../structures/dynamicsComponents/navbar';

class ModelagemNav extends Component {
  render() {
    const artefatos = [
      { pathname: "/modelagem", link: "Bio" }
    ];

    return (
      <div>
        <Sidenav />
        <Navbar activities={artefatos} />
      </div>
    );
  }
}

export default ModelagemNav;
 