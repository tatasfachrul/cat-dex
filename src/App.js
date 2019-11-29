import React, { Component } from 'react'

import { CardList } from './Components/Card-List/card-list.component'
import { SearchBox } from './Components/Search-Box/search-box.component'

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

  handleChange = event => {
    this.setState({ search: event.target.value })
  }

  render () {
    const { monsters, search } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    )
    return (
      <div className='App'>
      <h1>Cat Box</h1>
        <SearchBox
          placeholder='monster'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
