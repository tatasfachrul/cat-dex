import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCat } from '../../Public/Redux/Actions/Home'

import { CardList } from '../../Components/Card-List/card-list.component'
import { SearchBox } from '../../Components/Search-Box/search-box.component'

import '../../App.css'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      monsters: [],
      search: ''
    }
  }

  componentDidMount () {
    this.fetchData()
  }

  async fetchData () {
    await this.props.dispatch(getCat())
    if (this.props.isLoading){
      console.log('Loading bro!')
    } else {
      console.log('Ga loading dong')
    }

    this.setState({monsters: this.props.cat.catList})
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

const mapStateToProps = state => {
  return {
    cat: state.catList
  }
}

export default connect(mapStateToProps)(Home)
