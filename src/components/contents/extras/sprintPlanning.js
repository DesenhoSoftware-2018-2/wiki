import React, { Component } from "react";
import Extras from './extras';
import Markdown from '../../structures/dynamicsComponents/markdown';

class SprintPlanning extends Component {
    render(){
        return (
            <div>
                <Extras />
                <div className="container">
                <Markdown file="extras/sprintPlanning" />
                </div>
            </div>
    );
  }
}

export default SprintPlanning;