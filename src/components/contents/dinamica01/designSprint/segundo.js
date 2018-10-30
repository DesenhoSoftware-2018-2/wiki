import React, {Component} from 'react';
import DesignSprintNavbar from './designsprintNavbar';
import Markdown from '../../../structures/dynamicsComponents/markdown';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'


const e1 = require("../../../../assets/imgs/designSprint/segundo/esboco1.jpg");
const e2 = require("../../../../assets/imgs/designSprint/segundo/esboco2.jpg");
const e3 = require("../../../../assets/imgs/designSprint/segundo/esboco3.jpg");
const e4 = require("../../../../assets/imgs/designSprint/segundo/esboco4.jpg");
const e5 = require("../../../../assets/imgs/designSprint/segundo/esboco5.jpg");
const e6 = require("../../../../assets/imgs/designSprint/segundo/esboco6.jpg");
const e7 = require("../../../../assets/imgs/designSprint/segundo/esboco7.jpg");
const e8 = require("../../../../assets/imgs/designSprint/segundo/esboco8.jpg");
const e9 = require("../../../../assets/imgs/designSprint/segundo/esboco9.jpg");
const e10 = require("../../../../assets/imgs/designSprint/segundo/esboco10.jpg");

const ld1 = require("../../../../assets/imgs/designSprint/segundo/ld1.jpg");
const ld2 = require("../../../../assets/imgs/designSprint/segundo/ld2.jpg");

const mp = require("../../../../assets/imgs/designSprint/segundo/mp.jpg");

const img1 = require("../../../../assets/imgs/designSprint/segundo/img1.jpg");
const img2 = require("../../../../assets/imgs/designSprint/segundo/img2.jpg");

class Segundo extends Component{

    render() {
        return(
            <div>
                <DesignSprintNavbar />
                <div className="container">
                    <Markdown file="dinamica01/designSprint/segundo"/>
                    <h3>Mapa do Fluxo do Usuário Versão 2</h3>
                    <div className="designPhotos">
                        <ReactFancyBox thumbnail={mp} image={mp}/>
                    </div>
                    <h3>Lighting Demos Esboços</h3>
                    <div className="designPhotos">
                        <ReactFancyBox thumbnail={ld1} image={ld1}/>
                        <ReactFancyBox thumbnail={ld2} image={ld2}/>
                    </div>
                    <h3>Esboços Gerados</h3>
                    <div className="designPhotos">
                        <ReactFancyBox thumbnail={e1} image={e1}/>
                        <ReactFancyBox thumbnail={e2} image={e2}/>
                        <ReactFancyBox thumbnail={e3} image={e3}/>
                        <ReactFancyBox thumbnail={e4} image={e4}/>
                        <ReactFancyBox thumbnail={e5} image={e5}/>
                        <ReactFancyBox thumbnail={e6} image={e6}/>
                        <ReactFancyBox thumbnail={e7} image={e7}/>
                        <ReactFancyBox thumbnail={e8} image={e8}/>
                        <ReactFancyBox thumbnail={e9} image={e9}/>
                        <ReactFancyBox thumbnail={e10} image={e10}/>
                        <br />
                    </div>
                    <h3>Outras Imagens</h3>
                    <div className="designPhotos">
                        <ReactFancyBox thumbnail={img1} image={img1}/>
                        <ReactFancyBox thumbnail={img2} image={img2}/>
                    </div>

                </div>
            </div>
        );
    }

} export default Segundo;