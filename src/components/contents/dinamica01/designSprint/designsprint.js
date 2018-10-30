import React, { Component } from 'react';
import Markdown from '../../../structures/dynamicsComponents/markdown';
import DesignSprintNavbar from './designsprintNavbar';

class DesignSprint extends Component {
    render() {
        return (
          <div>
            <DesignSprintNavbar />
            <div className="container">
              <Markdown file="dinamica01/designSprint/designsprint" />
            </div>
          </div>
        );
    }
}

export default DesignSprint;