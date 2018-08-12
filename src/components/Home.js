import React, {Component} from 'react';
import test from '../assets/files/test.md'
const ReactMarkdown = require('react-markdown')

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

    render() {
        return(
            <div>
               <ReactMarkdown source={this.state.terms} />
            </div>
        ); 
    }

}
export default Home;
