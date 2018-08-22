import React, { Component } from "react";
import Extras from './extras';
import Markdown from '../../structures/dynamicsComponents/markdown';

class Reference extends Component {
  render() {
    return (
      <div>
        <Extras />
        <div className="container">
          <Markdown file="extras/reference" />
        </div>
      </div>
    );
  }
}

export default Reference;
