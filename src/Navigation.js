import React, { Component } from 'react'

class Navigation extends Component {

  termClickHandler = (term) => {
    this.props.onNavigate('tool', term)
  }

  aboutClickHandler = (event) => {
    this.props.onNavigate('about')
    event.preventDefault()
  }

  render () {
    const terms = this.props.terms.map((term, index) => {
      return <li onClick={this.termClickHandler.bind(this, term)} key={index}>{term}</li>
    })

    return <nav>
      <ul>
        {terms}
      </ul>
      <a onClick={this.aboutClickHandler} href="#">About</a>
    </nav>
  }
}

export default Navigation
