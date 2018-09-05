import React, { Component } from "react";
import Sidenav from "../sidenav";
import ImageSection from "../../paralax/image-section";
import TextSection from "../../paralax/text-section";
import Members from "./members";
import ImportTools from "./importTools";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { terms: null };
  }

  render() {
    const members = [
      {
        img: "amanda.jpeg",
        name: "Amanda Muniz",
        git: "AmandaMuniz",
        email: "amymuniiz@gmail.com",
        frase: '"Votei por dó."'
      },
      {
        img: "bruno.jpeg",
        name: "Bruno Dantas",
        git: "brunooliveiradantas",
        email: "oliveiradantas96@gmail.com",
        frase: '"FRASE"'
      },
      {
        img: "calebe.jpeg",
        name: "Calebe Rios",
        git: "caleberios",
        email: "calebersmendes@gmail.com",
        frase: '"FRASE"'
      },
      {
        img: "indiara.jpeg",
        name: "Indiara Duarte",
        git: "inddiara",
        email: "indiara96d@gmail.com",
        frase: '"FRASE"'
      },
      {
        img: "isaque.jpeg",
        name: "Isaque Alves",
        git: "alvesisaque",
        email: "isaquealvesdl@gmail.com",
        frase: '"Cria uma issue."'
      },
      {
        img: "joao.jpg",
        name: "João Vitor",
        git: "joaovitor3",
        email: "joaovytor0@gmail.com",
        frase: '"FRASE"'
      },
      {
        img: "luciana.jpeg",
        name: "Luciana Ribeiro",
        git: "lucianaribeiro",
        email: "albuquerqueluciana54@gmail.com",
        frase: '"FRASE"'
      },
      {
        img: "martha.jpg",
        name: "Martha Dantas",
        git: "MarthaDs",
        email: "marthadntas@gmail.com",
        frase: '"FRASE"'
      },
      {
        img: "vitor.jpeg",
        name: "Vitor Cardoso",
        git: "vitorcx",
        email: "vitorcx010@gmail.com",
        frase: '"FRASE"'
      }
    ];

    const tools = [
      { name: "Drive" },
      { name: "GitHub" },
      { name: "Hangouts" },
      { name: "Telegram" },
      { name: "ZenHub" }
    ];

    return (
      <div>
        <Sidenav />
        <ImageSection
          source="img1.jpg"
          content="Arquitetura e Desenho de Software"
          subcontent="2018/2"
          height="100vh"
          border={true}
        />
        <TextSection title="Bio" theme="dark">
          <p>
            Wiki destinada a disciplina de Arquitetura e Desenho de Software
            realizada pelos alunos da UnB.
          </p>
          <p>
            Desenho de software, ou Projeto de software, é o processo de
            transformar os requistos dos usuários em documentos de baixo nível,
            se aproximando cada vez mais da implementação em codígo. Essa
            transformação inclui atividades de concepção, especificação e de
            prototipação de um software, que vai desde a interface do usuário
            até os algoritmos e estruturas de dados necessários para implementar
            o software.
          </p>
          <p>
            Arquitetura de Software é a definição dos elementos arquiteturais,
            como banco de dados, servidores, clientes, entre outros. Envolve
            também como será a interação entre esses elementos, quais padrões
            serão necessários para o projeto e quais as restrições desses
            padrões.
          </p>
        </TextSection>
        <ImageSection
          source="img3.jpeg"
          content=""
          height="40vh"
          border={false}
        />
        <TextSection title="Conheça a Equipe" theme="light">
          <div className="members-list">
            {members.map(member => {
              return (
                <Members
                  img={member.img}
                  name={member.name}
                  git={member.git}
                  email={member.email}
                  frase={member.frase}
                />
              );
            })}
          </div>
        </TextSection>
        <ImageSection
          source="img4.jpg"
          height="40vh"
          border={false}
          filter="grayscale(55%)"
        />
        <TextSection title="Ferramentas" theme="dark">
          <div className="tools-list">
            {tools.map(tool => {
              return <ImportTools name={tool.name} />;
            })}
          </div>
        </TextSection>
        <ImageSection source="img2.jpg" content="" height="100vh" />
      </div>
    );
  }
}
export default Home;
