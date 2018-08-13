import React, { Component } from 'react'
import './image-section.css'

export default class ImageSection extends Component {
  constructor(props) {
		super(props);
		this.state = {
			styles: {
				backgroundImage: '',
				minHeight: '',
			},
		}
		this.state.styles.backgroundImage = `url(${require('../../assets/imgs/paralax/' + this.props.source)})`;
		this.state.styles.minHeight = this.props.height;
  }
  render() {
    return (
			<div className="pimg1" style={this.state.styles}>
				<div className="ptext">
						<span className={this.props.border ? 'border' : ''}>
							{this.props.content}
						</span>
				</div>
			</div>
    )
  }
}
