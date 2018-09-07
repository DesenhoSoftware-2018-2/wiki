import React, {Component} from 'react';
import DesignSprintNavbar from './designsprintNavbar';
import Markdown from '../../../structures/dynamicsComponents/markdown';

class Quarto extends Component{

    render() {
        return(
            <div>
                <DesignSprintNavbar />
                <div className="container">
                    <Markdown file="dinamica01/designSprint/quarto"/>
                </div>
            </div>
        );
    }

} export default Quarto;