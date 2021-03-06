import React, { Component } from "react";
import Markdown from '../../../structures/dynamicsComponents/markdown';
import PriorizacaoNav from './priorizacaoNav';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";

const ftfs = [
  {
    id:"0",
    name: 'FTF',
    path: "dinamica01/priorizacao/firstThingsFirst/firstThingsFirst",
  },
  {
    id:"1",
    name: 'FTF da Equipe',
    path: "dinamica01/priorizacao/firstThingsFirst/ftfEquipe",
  },
  {
    id:"2",
    name: 'Amanda',
    path: "dinamica01/priorizacao/firstThingsFirst/ftfAmanda",
  },
  {
    id:"3",
    name: 'Bruno',
    path: "dinamica01/priorizacao/firstThingsFirst/ftfBruno",
  },
  {
    id:"4",
    name: 'Calebe',
    path: "dinamica01/priorizacao/firstThingsFirst/ftfCalebe",
  },
  {
    id:"5",
    name: 'Indiara',
    path: "dinamica01/priorizacao/firstThingsFirst/ftfIndiara",
  },
  {
    id:"6",
    name: 'Isaque',
    path: "dinamica01/priorizacao/firstThingsFirst/ftfIsaque",
  },
  {
    id:"7",
    name: 'João',
    path: "dinamica01/priorizacao/firstThingsFirst/ftfJoao",
  },
  {
    id:"8",
    name: 'Luciana',
    path: "dinamica01/priorizacao/firstThingsFirst/ftfLuciana",
  },
  {
    id:"9",
    name: 'Martha',
    path: "dinamica01/priorizacao/firstThingsFirst/ftfMartha",
  },
  {
    id:"10",
    name: 'Vitor',
    path: "dinamica01/priorizacao/firstThingsFirst/ftfVitor",
  },
]

class FirstThingsFirst extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".tabs");
    M.Tabs.init(elems, {});
  }
  
  render() {
    return (
      <div>
        <PriorizacaoNav />
        <div className="container">
          <br />

          <h1>First Thing First</h1>
           <br />
          <div className="row">
          <div className="col s2">
          <ul className="tabs lateral">

                {
                  ftfs.map((ftf) => {
                    return(
                        <li className="tab"><a href={(`#` + ftf.id)}>{ftf.name}</a></li>
                    );
                  })
                }
            </ul>
               </div>
            <div className="col s10">

               { 
                  ftfs.map((ftf) => {
                    return(
                        <div id={ftf.id} className="col s12"><Markdown file={ftf.path} /></div>
                      );
                  })
               }
            </div>
          </div>
        </div>
      </div>
    );
  }
} export default FirstThingsFirst;
