import React, {Component} from 'react';

const lucianaImg = require("../assets/imgs/members/luciana.jpg");

class Members extends Component {

    render(){
        return(
            <div className="row">
            <div className="col s12 m7">
              <div className="card small card-member">
                <div className="card-image">
                  <img src={lucianaImg} alt=""/>
                  <span className="card-title">Luciana Ribeiro</span>
                </div>
                <div className="card-content" id="card-info">
                  <label>albuquerqueluciana54@gmail.com</label><br />
                  <label>@lucianaribeiro</label>
                </div>
              </div>
            </div>
          </div>
        );
    }
} export default Members;