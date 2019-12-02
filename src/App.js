import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Home from './Screens/Home/Home'
import Store from './Public/Redux/Store'

class App extends Component {
  render () {
    return(
      <Provider store={Store}>
        <Home />
      </Provider>
    )
  }
}

export default App
