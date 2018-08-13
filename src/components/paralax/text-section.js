import React, { Component } from 'react'
import './text-section.css'
export default class TextSection extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <section class={`section section-${this.props.theme}`}>
        <h2>{this.props.title}</h2>
        <p>{this.props.children || "No text provided"}</p>
      </section>;
  }
}
