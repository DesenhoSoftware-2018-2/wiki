import React, { Component } from "react";
import Dinamica02 from './dinamica04';
import Markdown from '../../structures/dynamicsComponents/markdown';

class PadroesProjeto extends Component {
    render(){
        return (
            <div>
                <Dinamica02 />
                <div className="container">
                    <Markdown file="dinamica04/padroesProjeto" />
                </div>
            </div>
        );
    }
} export default PadroesProjeto;
