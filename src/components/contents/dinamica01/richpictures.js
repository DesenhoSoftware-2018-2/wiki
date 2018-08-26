import React, { Component } from "react";
import Dinamica01 from './dinamica01';
import Markdown from '../../structures/dynamicsComponents/markdown';

class Richpictures extends Component {
  render() {
    return (
      <div>
        <Dinamica01 />
        <div className="container">
          <Markdown file="dinamica01/richpictures" />
        </div>
      </div>
    );
  }
} export default Richpictures;
