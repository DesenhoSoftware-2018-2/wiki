import React, { Component } from "react";
import Dinamica02 from './dinamica03';
import Markdown from '../../structures/dynamicsComponents/markdown';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

const nfrv10 = require("../../../assets/imgs/dinamica03/NFRv1.png");
const nfrv20 = require("../../../assets/imgs/dinamica03/NFRv2.png");

class Nfr extends Component {
  render() {
    return (
      <div>
        <Dinamica02 />
        <div className="container">
        <div className="designPhotos">
            <Markdown file="dinamica03/nfr" />
            <div>
                 <h2>Versão 1.0</h2>
                 <ReactFancyBox thumbnail={nfrv10} image={nfrv10}/>
                 <p>Autor: Isaque Alves</p>
            </div>
            <div>
                 <h2>Versão 2.0</h2>
                 <ReactFancyBox thumbnail={nfrv20} image={nfrv20}/>
                 <p>Autor: Isaque Alves</p>
            </div>
        </div>
        </div>
      </div>
    );
  }
} export default Nfr;
