import React, { Component } from 'react'

class Navigation extends Component {

  termClickHandler = (term) => {
    window.location.hash = `/tool/${term}`
  }

  aboutClickHandler = (event) => {
    window.location.hash = `/about`
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
