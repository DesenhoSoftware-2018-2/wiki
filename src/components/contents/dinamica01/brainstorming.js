import React, { Component } from "react";
import Dinamica01 from './dinamica01';
import Markdown from '../../structures/dynamicsComponents/markdown';

class Brainstorming extends Component {
  render() {
    return (
      <div>
        <Dinamica01 />
        <div className="container">
          <Markdown file="dinamica01/brainstorming" />
        </div>
      </div>
    );
  }
} export default Brainstorming;
