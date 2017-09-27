import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import './css/bootstrap.css'
import './css/App.css';

import ListContainer from './components/containers/ListContainer';
import AddContainer from './components/containers/AddContainer';

ReactDOM.render(
      <BrowserRouter>
          <div>
              <Route exact path="/" component={ListContainer}/>
              <Route path="/add" component={AddContainer}/>
          </div>
      </BrowserRouter>,  
    document.getElementById('root')
  );


