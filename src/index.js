import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import './css/bootstrap.css';
import './css/App.css';

import Transactions from './pages/Transactions';
import AddTransaction from './pages/AddTransaction';
import AddFilter from './pages/AddFilter';

ReactDOM.render(
        <BrowserRouter>
                <div>
                        <Route exact path="/" component={Transactions}/>
                        <Route path="/addTransaction" component={AddTransaction}/>
                        <Route path="/addFilter" component={AddFilter}/>
                </div>
        </BrowserRouter>,  
        document.getElementById('root')
)


