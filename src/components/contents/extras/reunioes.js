import React, { Component } from "react";
import Extras from './extras';
import Markdown from '../../structures/dynamicsComponents/markdown';

class Reunioes extends Component {
  render() {
    return (
      <div>
        <Extras />
        <div className="container">
          <Markdown file="extras/reunioes" />
        </div>
      </div>
    );
  }
}

export default Reunioes;
