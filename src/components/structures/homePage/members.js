import React, {Component} from 'react';

class Members extends Component {

    render(){
        return(
            <div className="row">
            <div className="col s12 m7">
              <div className="card card-member">
                <div className="card-image">
                  <a className="img-member" href={`https://www.github.com/${this.props.git}`} target="_blank">
                    <img src={require(`../../../assets/imgs/members/${this.props.img}`)} alt=""/>
                  </a>
                </div>
                <div className="card-content" id="card-info">
                  <a href={`https://www.github.com/${this.props.git}`} target="_blank" className="card-title black-text">{this.props.name}</a>
                  <label>@{this.props.git}</label><br />
                  <label>{this.props.email}</label><br />
                  <h6>{this.props.frase}</h6>
                </div>
              </div>
            </div>
          </div>
        );
    }
} export default Members;