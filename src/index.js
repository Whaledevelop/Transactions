import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { HashRouter, Route} from 'react-router-dom';

=======
import './index.css';
>>>>>>> parent of bdadb88... Another name refact
import App from './App';
import AddForm from './AddForm';
import reducer from './reducers';

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ 
  && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/add" component={AddForm}/>
        </div>
      </HashRouter>
    </Provider>,  
    document.getElementById('root')
  );

