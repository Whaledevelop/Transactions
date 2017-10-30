import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import App from '../components/App'
import Home from '../components/Home'
import Transactions from '../pages/Transactions'
import Counterparts from '../pages/Counterparts'
import Filters from '../pages/Filters'
import AddTransaction from '../pages/AddTransaction'
import AddCounterpart from '../pages/AddCounterpart'
import AddFilter from '../pages/AddFilter'

let history = createBrowserHistory();

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/transactions" component={Transactions}/>
          <Route path="/counterparts" component={Counterparts}/>
          <Route path="/filters" component={Filters}/>
          <Route path="/addtransaction" component={AddTransaction}/>
          <Route path="/addcounterpart" component={AddCounterpart}/>
          <Route path="/addfilter" component={AddFilter}/>
        </Switch>
      </App>
    </Router>
  </Provider>
);



export default Root;