import React, { Component } from "react";
import Navbar from "./navbar";
import Sidenav from '../../structures/sidenav';

class NavbarLinks extends Component {
  render() {
    return (
      <div>
        <Sidenav />
        <Navbar activities={[ {'pathname' : '/', 'link': 'Atividade 1' }, {'pathname' : '/', 'link': 'Atividade 2' }, {'pathname' : '/', 'link': 'Atividade 3' }]} />
      </div>
    );
  }
}

export default NavbarLinks;
