import React, { Component } from 'react'
import About from './About'
import Home from './Home'
import Navigation from './Navigation'
import Tool from './Tool'
// webpack let's us import JSON files!
import data from './data.json'

class App extends Component {

  constructor () {
    super()
    this.state = {
      currentScreen: 'home'
    }
  }

  // `term` will be undefined on the About page.
  navigateTo = () => {
    const screen = window.location.hash.split('/')[1]
    const term = window.location.hash.split('/')[2]

    this.setState({
      currentScreen: screen,
      currentTerm: term
    })
  }

  goHome = () => {
    window.location.hash = '/'
  }

  componentDidMount () {
    window.addEventListener('hashchange', this.navigateTo)
  }

  render () {
    const terms = Object.keys(data.tools)
    let screen

    // NOTE: This part could be improved with a `switch` statement
    // rather than a series of `if` conditions.
    if (this.state.currentScreen === 'about') {
      screen = <About />
    } else if (this.state.currentScreen === 'tool') {
      const details = data.tools[this.state.currentTerm]
      screen = <Tool term={this.state.currentTerm} details={details} />
    } else {
      screen = <Home />
    }

    return <div className="app">
      <aside>
        <h1 onClick={this.goHome}>Tools</h1>
        <Navigation terms={terms} />
      </aside>
      <main>
        {screen}
      </main>
    </div>
  }
}

export default App
