import React, { Component } from "react";
import Navbar from "./navbar";

class NavbarLinks extends Component {
  render() {
    return (
      <div>
        <Navbar activities={[ {'pathname' : '/', 'link': 'Atividade 1' }, {'pathname' : '/', 'link': 'Atividade 2' }, {'pathname' : '/', 'link': 'Atividade 3' }]} />
      </div>
    );
  }
}

export default NavbarLinks;
