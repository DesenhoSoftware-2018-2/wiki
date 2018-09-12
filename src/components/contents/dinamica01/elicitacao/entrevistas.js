import React, { Component } from "react";
import Markdown from "../../../structures/dynamicsComponents/markdown";
import ElicitacaoNav from "./elicitacaoNav";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";


const interviews = [
  {
    id:"0",
    name: 'Entrevistas',
    path: "dinamica01/elicitacao/entrevistas/entrevistas",
  },
  {
    id:"1",
    name: 'Ana Paula',
    path: "dinamica01/elicitacao/entrevistas/anaPaula",
  },
  {
    id:"2",
    name: 'Felipe',
    path: "dinamica01/elicitacao/entrevistas/felipe",
  },
  {
    id:"3",
    name: 'Julia Ribeiro',
    path: "dinamica01/elicitacao/entrevistas/julia",
  },
  {
    id:"4",
    name: 'Lucas Gomes',
    path: "dinamica01/elicitacao/entrevistas/lucasGomes",
  },
  {
    id:"5",
    name: 'Rafael Paiva',
    path: "dinamica01/elicitacao/entrevistas/rafael",
  },
  {
    id:"6",
    name: 'Rafael Zottis',
    path: "dinamica01/elicitacao/entrevistas/rafaelZottis",
  },
  {
    id:"7",
    name: 'Tales Soares',
    path: "dinamica01/elicitacao/entrevistas/tales",
  },
  {
    id:"8",
    name: 'Thiago Rafael',
    path: "dinamica01/elicitacao/entrevistas/rafael",
  }
]

class Entrevistas extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".tabs");
    M.Tabs.init(elems, {});
  }

  render() {
    return (
      <div>
        <ElicitacaoNav />
        <div className="container">
          <br />

<Markdown file="dinamica01/elicitacao/entrevistas/entrevista" />
           <br />
          <div className="row">
          <div className="col s3">
          <ul className="tabs lateral">

                {
                  interviews.map((interview) => {
                    return(
                        <li className="tab"><a href={(`#` + interview.id)}>{interview.name}</a></li>
                    );
                  })
                }
            </ul>
               </div>
            <div className="col s9">

               { 
                  interviews.map((interview) => {
                    return(
                        <div id={interview.id} className="col s12"><Markdown file={interview.path} /></div>
                      );
                  })

               }
            </div>
          </div>
        </div>
      </div>
    );
  }
} export default Entrevistas;
