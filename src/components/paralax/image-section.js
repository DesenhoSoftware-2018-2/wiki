import React, { Component } from 'react'
import './image-section.css'

export default class ImageSection extends Component {
  constructor(props) {
		super(props);
		this.state = {
			styles: {
				backgroundImage: '',
				minHeight: '',
				filter: '',
			},
		}
		this.state.styles.backgroundImage = `url(${require('../../assets/imgs/paralax/' + this.props.source)})`;
		this.state.styles.minHeight = this.props.height;
		this.state.styles.filter = this.props.filter;
  }
  render() {
    return (
			<div className="pimg1" style={this.state.styles}>
				<div className="ptext">
						<span className={this.props.border ? 'border' : ''}>
							{this.props.content}
						</span>
						<br />
						<br />
						<span className={`${this.props.subcontent ? '' : 'deactivated'} ${this.props.border ? 'border' : ''}`}>
							{this.props.subcontent}
						</span>
				</div>
			</div>
    )
  }
}
