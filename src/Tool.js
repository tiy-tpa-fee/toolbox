import React, { Component } from 'react'

class Tool extends Component {

  render () {
    return <div>
      <h2>{this.props.term}</h2>
      <h3>/{this.props.details.pronunciation}/</h3>
      <p>{this.props.details.description}</p>
    </div>
  }
}

export default Tool
