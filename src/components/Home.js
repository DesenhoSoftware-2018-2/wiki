import React, {Component} from 'react';
import test from '../assets/files/test.md';
import { Link } from 'react-router-dom';
const ReactMarkdown = require('react-markdown');

class Home extends Component {
    constructor(props) {
        super(props)    
        this.state = { terms: null }
    }

    componentWillMount() {
        fetch(test).then((r) => r.text()).then((t) => {
            this.setState({ terms: t })
        })
    }

    RouterLink(props) {
        return (
          props.href.match(/^(https?:)?\/\//)
            ? <a href={props.href}>{props.children}</a>
            : <Link to={props.href}>{props.children}</Link>
        );
    }

    render() {
        return(
            <div>
               <ReactMarkdown source={this.state.terms} renderers={{ link: this.RouterLink}} />
            </div>
        ); 
    }

}
export default Home;
