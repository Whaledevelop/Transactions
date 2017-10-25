import React from 'react';
import { render } from 'react-dom';

import './css/bootstrap.css';
import './css/App.css';

import configureStore from './configureStore';
import Root from './components/Root';

let store = configureStore();

render(
        <Root store={store} />,  
        document.getElementById('root')
)


