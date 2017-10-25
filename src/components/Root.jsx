import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import App from '../pages/App';

let history = createBrowserHistory();

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path='/(:filter)' component={App}/>
            </div>
        </Router>
    </Provider>
);

export default Root;