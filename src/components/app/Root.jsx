import React from 'react';
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import {store, history} from '../../configureStore'
import App from './App'
import Home from '../../pages/Home'
import Transactions from '../../pages/Transactions'
import Counterparts from '../../pages/Counterparts'
import Filters from '../../pages/Filters'

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/transactions" component={Transactions}/>
          <Route path="/counterparts" component={Counterparts}/>
          <Route path="/filters" component={Filters}/>
        </Switch>
      </App>
    </Router>
  </Provider>
)

export default Root
