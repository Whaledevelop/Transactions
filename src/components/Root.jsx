import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import Transactions from '../pages/Transactions'
import Counterparts from '../pages/Counterparts'
import Filters from '../pages/Filters'
import AddTransaction from '../pages/AddTransaction'

let history = createBrowserHistory();
console.log ('Root js');
const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Redirect from='/' to="/transactions"/>
        <Route path='/transactions' component={Transactions}/>
        <Route path='/counterparts' component={Counterparts}/>
        <Route path='/filters' component={Filters}/>
        <Route path='/addTransaction' component={AddTransaction}/>      
      </div>
    </Router>
  </Provider>
);

const Home = () => {
  return <h4>Hello</h4>
}

export default Root;