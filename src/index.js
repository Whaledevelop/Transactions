import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter , Route} from 'react-router-dom';

import './index.css';
import App from './App';
import AddForm from './AddForm';
import reducer from './reducers';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ 
  && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/add" component={AddForm}/>
        </div>
      </BrowserRouter>
    </Provider>,  
    document.getElementById('root')
  );

