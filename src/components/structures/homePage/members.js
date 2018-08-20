import React, {Component} from 'react';

class Members extends Component {

    render(){
        return(
            <div className="row">
            <div className="col s12 m7">
              <div className="card small card-member">
                <div className="card-image">
                  <img src={require(`../../../assets/imgs/members/${this.props.img}`)} alt=""/>
                  <span className="card-title">{this.props.name}</span>
                </div>
                <div className="card-content" id="card-info">
                  <label>{this.props.git}</label><br />
                  <label>{this.props.email}</label>
                </div>
              </div>
            </div>
          </div>
        );
    }
} export default Members;