import React, { Component } from "react";
import Markdown from "../../../structures/dynamicsComponents/markdown";
import ElicitacaoNav from "./elicitacaoNav";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";


const interviews = [
  {
    id:"1",
    name: 'Lucas Gomes',
    path: "dinamica01/elicitacao/entrevistas/lucasGomes",
  },
  {
    id:"2",
    name: 'Bruno',
    path: "dinamica01/elicitacao/entrevistas/brunoGomes",
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

<Markdown file="dinamica01/elicitacao/entrevistas/lucasGomes" />
           <br />
          <div className="row">
          <div className="col s4">
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
            <div className="col s8">

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
