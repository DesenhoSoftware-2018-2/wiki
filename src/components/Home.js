import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ImageSection from './paralax/image-section';
import TextSection from './paralax/text-section';
import test from '../assets/files/test.md';
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
                <ImageSection source="img1.jpg" content="Arquitetura e Desenho de Software" height="100vh" border={true} />
                <TextSection title="Bio" theme="dark">
                    Projeto da disciplina Arquitetura e Desenho de Software pelos alunos da UnB 
                </TextSection>
                <ImageSection source="img2.jpg" content="Some text here" height="40vh" border={false} />
                <TextSection title="Second Section" theme="light">
                    Mauris ac porta velit. Ut at porttitor turpis, eu dictum sapien. Nullam ut tempor dolor, eu lobortis purus. In hac habitasse platea dictumst. Nullam laoreet ipsum at ullamcorper vehicula. Curabitur placerat hendrerit ex eu sagittis. Fusce sed auctor quam. Aenean pellentesque sed tellus in malesuada.
                </TextSection>
                <ImageSection source="img3.jpeg" content="More text here" height="40vh" border={false} />
                <TextSection title="Third Section" theme="dark">
                    Vivamus nunc risus, ullamcorper ac suscipit eget, sodales quis augue. Aliquam quis ante vitae urna consequat interdum. Nullam laoreet convallis ipsum, semper euismod turpis lacinia vitae. Nam nec aliquet ligula, eget lacinia felis. Morbi nec enim justo. Praesent non rhoncus nisl. Nulla facilisi. In auctor neque non viverra tincidunt. Maecenas id nisl non sem vulputate sollicitudin. Integer porta fringilla sagittis. Integer sagittis massa a mauris laoreet, quis efficitur mi vestibulum.
                </TextSection>
                <ImageSection source="img4.jpg" content="2018/2" height="100vh" border={true} />
            </div>
        ); 
    }

}
export default Home;
