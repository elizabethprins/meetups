import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Main from './components/Main'
import Page from './components/Page'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/:id" component={Page} />
      </div>
    )
  }
}
