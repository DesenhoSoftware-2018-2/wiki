import React, { Component } from "react";
import { Link } from "react-router-dom";

const homePath = {
  pathname: "/"
};

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-dark">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {
              this.props.activities.map(
                (activity) => {
                  return (
                    <li>
                      <Link to={activity.pathname}>
                        <span className="white-text name">{activity.link}</span>
                      </Link>
                    </li>
                  );
                }
              )
            }
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
