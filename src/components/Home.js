import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Sidenav from './sidenav';
import ImageSection from './paralax/image-section';
import TextSection from './paralax/text-section';
import Members from './members';
import test from '../assets/files/test.md';
import ImportTools from '../components/importTools';

// const ReactMarkdown = require('react-markdown');

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
                <Sidenav />
                <ImageSection source="img1.jpg" content="Arquitetura e Desenho de Software" subcontent="2018/2" height="100vh" border={true} />
                <TextSection title="Bio" theme="dark">
                    Projeto da disciplina Arquitetura e Desenho de Software pelos alunos da UnB 
                    {/* <ReactMarkdown source={this.state.terms} renderers={{ link: this.RouterLink}} /> */}
                </TextSection>
                <ImageSection source="img3.jpeg" content="" height="40vh" border={false} />
                <TextSection title="Conheça a Equipe" theme="light">
                    <div className="members-list">
                        <Members img="amanda.jpeg" nome="Amanda Muniz" git="@AmandaMuniz" email="amymuniiz@gmail.com"/>
                        <Members img="bruno.jpeg" nome="Bruno Dantas" git="@brunooliveiradantas" email="oliveiradantas96@gmail.com"/>
                        <Members img="calebe.jpeg" nome="Calebe Rios" git="@caleberios" email="calebersmendes@gmail.com"/>
                        <Members img="indiara.jpeg" nome="Indiara Duarte" git="@inddiara" email="indiara96d@gmail.com"/>
                        <Members img="isaque.jpeg" nome="Isaque Alves" git="@alvesisaque" email="isaquealvesdl@gmail.com"/>
                        <Members img="joao.jpg" nome="João Vitor" git="joaovitor3" email="joaovytor0@gmail.com"/>
                        <Members img="luciana.jpeg" nome="Luciana" git="lucianaribeiro" email="albuquerqueluciana54@gmail.com"/>
                        <Members img="martha.jpg" nome="Martha Dantas" git="@MarthaDs" email="marthadntas@gmail.com"/>
                        <Members img="vitor.jpeg" nome="Vitor Cardoso" git="@vitorcx" email="vitorcx010@gmail.com"/>
                    </div>
                </TextSection>
                <ImageSection source="img4.jpg" height="40vh" border={false} filter="grayscale(55%)"/>
                <TextSection title="Ferramentas" theme="dark">
                    <div className="tools-list">
                        <ImportTools name="Drive"/>
                        <ImportTools name="GitHub"/>
                        <ImportTools name="Hangouts"/>
                        <ImportTools name="Telegram"/>
                        <ImportTools name="ZenHub"/>
                    </div>
                </TextSection>
                <ImageSection source="img2.jpg" content="" height="100vh"/>
            </div>
        ); 
    }

}
export default Home;
