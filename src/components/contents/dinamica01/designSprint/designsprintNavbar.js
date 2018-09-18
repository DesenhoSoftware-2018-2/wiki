import React, { Component } from "react";
import Navbar from "../../../structures/dynamicsComponents/navbar";
import Sidenav from "../../../structures/sidenav";

class DesignSprintNavbar extends Component {
  render() {
    const artefatos = [
        { pathname: "/designsprint", link: "Bio" },
        { pathname: "/entender", link: "Entender" },
        { pathname: "/designsprint/esbocar", link: "Esboçar" },
        { pathname: "/designsprint/decidir", link: "Decidir" },
        { pathname: "/designsprint/prototipar", link: "Prototipar" },
        { pathname: "/designsprint/testar", link: "Testar"}
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
