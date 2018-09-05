import React, {Component} from 'react';
import { Link } from 'react-router-dom';
const ReactMarkdown = require('react-markdown');

class Markdown extends Component {

    constructor(props) {
        super(props)
        this.state = { terms: null, img: null}
    }

    componentWillMount() {
        const file = require(`../../../assets/files/${this.props.file}.md`);
        fetch(file).then((r) => r.text()).then((t) => {
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
        const transformImageUri = input =>
        /^https?:/.test(input)
                ? input
                : require(`../../../assets/imgs/${input}`)

                return(
            <div>
                <ReactMarkdown
                    source={this.state.terms}
                    renderers={{ link: this.RouterLink}}
                    transformImageUri={transformImageUri} />
            </div>
        );
    }
} export default Markdown;
