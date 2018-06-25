import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import App from './App'
import Home from '../../routes/Home'
import Transactions from '../../routes/Transactions'
import Counterparts from '../../routes/Counterparts'
import Filters from '../../routes/Filters'

const Root = () => (
  <Router history={createBrowserHistory()}>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/transactions" component={Transactions}/>
        <Route path="/counterparts" component={Counterparts}/>
        <Route path="/filters" component={Filters}/>
      </Switch>
    </App>
  </Router>
)

export default Root
