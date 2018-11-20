import React, { Component } from "react";
import Markdown from '../../../structures/dynamicsComponents/markdown';
import PriorizacaoNav from './priorizacaoNav';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.css";

const ftfs = [
  {
    id:"0",
    name: 'First Things First',
    path: "dinamica01/priorizacao/firstThingsFirst/firstThingsFirst",
  },
  {
    id:"1",
    name: 'FTF da Equipe',
    path: "dinamica01/priorizacao/firstThingsFirst/firstThingsFirst",
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
          <div className="col s3">
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
            <div className="col s9">

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
