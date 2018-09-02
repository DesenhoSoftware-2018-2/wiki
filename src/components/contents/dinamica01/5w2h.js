import React, { Component } from "react";
import Dinamica01 from './dinamica01';
import Markdown from '../../structures/dynamicsComponents/markdown';

class wh extends Component {
  render() {
    return (
      <div>
        <Dinamica01 />
        <div className="container">
          <Markdown file="dinamica01/5w2h" />
        </div>
      </div>
    );
  }
} export default wh;
