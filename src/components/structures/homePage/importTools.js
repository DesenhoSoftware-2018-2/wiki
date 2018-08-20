import React, {Component} from 'react';

class importTools extends Component{
    render(){
        const tool = require(`../../../assets/imgs/tools/${this.props.name}.png`); 
        return(
            <div className="tools">
                    <h4>{this.props.name}</h4>
                    <img src={tool} alt="tool"/>
            </div>
        );
    }
}

export default importTools;