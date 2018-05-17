import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import history from '../../modules/history'

import Home from '../home/home-container'
import About from '../about/about-container'

class AppContainer extends Component {
  render () {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route component={About} />
        </Switch>
      </ConnectedRouter>
    )
  }
}

export default AppContainer
