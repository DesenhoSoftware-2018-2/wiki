import React, {Component} from 'react';
import DesignSprintNavbar from './designsprintNavbar';
import Markdown from '../../../structures/dynamicsComponents/markdown';

class Terceiro extends Component{

    render() {
        return(
            <div>
                <DesignSprintNavbar />
                <div className="container">
                    <Markdown file="dinamica01/designSprint/terceiro"/>
                </div>
            </div>
        );
    }

} export default Terceiro;