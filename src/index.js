import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './css/bootstrap.css';
import './css/App.css';

import App from './pages/App';
import transactionsApp from './reducers';
// import AddTransaction from './pages/AddTransaction';
// import AddFilter from './pages/AddFilter';

let store = createStore(transactionsApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
        <Provider store={store}>
                <BrowserRouter>
                        <div>
                                <Route exact path="/" component={App}/>
                                {/* <Route path="/addTransaction" component={AddTransaction}/>
                                <Route path="/addFilter" component={AddFilter}/> */}
                        </div>
                </BrowserRouter>
        </Provider>,  
        document.getElementById('root')
)


