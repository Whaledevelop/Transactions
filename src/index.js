import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import './css/bootstrap.css';
import './css/App.css';

import TransactionsList from './pages/TransactionsList';
import AddTransaction from './pages/AddTransaction';

ReactDOM.render(
      <BrowserRouter>
          <div>
              <Route exact path="/" component={TransactionsList}/>
              <Route path="/add" component={AddTransaction}/>
          </div>
      </BrowserRouter>,  
    document.getElementById('root')
  );


