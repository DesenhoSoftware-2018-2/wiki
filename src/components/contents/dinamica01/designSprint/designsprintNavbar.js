import React, { Component } from "react";
import Navbar from "../../../structures/dynamicsComponents/navbar";
import Sidenav from "../../../structures/sidenav";

class DesignSprintNavbar extends Component {
  render() {
    const artefatos = [
        { pathname: "/designsprint", link: "Bio" },
        { pathname: "/entender", link: "Entender" },
        { pathname: "/esbocar", link: "Esboçar" },
        { pathname: "/decidir", link: "Decidir" },
        { pathname: "/prototipar", link: "Prototipar" },
        { pathname: "/testar", link: "Testar"}
      ];

    return (
      <div>
        <Sidenav />
        <Navbar activities={artefatos} />
      </div>
    );
  }
}

export default DesignSprintNavbar;
