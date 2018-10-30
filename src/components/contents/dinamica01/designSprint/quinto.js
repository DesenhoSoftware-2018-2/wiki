import React, {Component} from 'react';
import DesignSprintNavbar from './designsprintNavbar';
import Markdown from '../../../structures/dynamicsComponents/markdown';

class Quinto extends Component{

    render() {
        return(
            <div>
                <DesignSprintNavbar />
                <div className="container">
                    <Markdown file="dinamica01/designSprint/quinto"/>
                </div>
            </div>
        );
    }

} export default Quinto;