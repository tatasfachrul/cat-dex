import React, { Component } from 'react'

import { CardList } from './Components/Card-List/card-list.component'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      monsters: []
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monster => this.setState({ monsters: monster }))
  }

  render () {
    return (
      <div className='App'>
        <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App
