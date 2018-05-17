import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './lib/create-store'
import baseStyles from './styles/index'
import AppContainer from './containers/app/app-container'

const render = () => {
  baseStyles()

  ReactDOM.render((
    <Provider store={store}>
      <Router>
        <AppContainer />
      </Router>
    </Provider>
  ), document.getElementById('root'))
}

render()
