import React, {Component} from 'react';
import DesignSprintNavbar from './designsprintNavbar';
import Markdown from '../../../structures/dynamicsComponents/markdown';
import Prototipo from '../elicitacao/prototipo';
import PrototipoImgs from '../elicitacao/prototipoImgs';

class Quarto extends Component{

    render() {
        return(
            <div>
                <DesignSprintNavbar />
                <div className="container">
                    <Markdown file="dinamica01/designSprint/quarto"/>
                    <PrototipoImgs />
                </div>
            </div>
        );
    }

} export default Quarto;