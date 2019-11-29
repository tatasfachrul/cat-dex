import React, { Component } from 'react'

import { CardList } from './Components/Card-List/card-list.component'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      monsters: [],
      search: ''
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(monster => this.setState({ monsters: monster }))
  }

  render () {
    const { monsters, search } = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(search.toLowerCase()))
    return (
      <div className='App'>
        <input type='search' placeholder='search somethings ....' onChange={event => this.setState({ search: event.target.value })} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
