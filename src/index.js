import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';

import './index.css';
import App from './App';
import AddForm from './AddForm';

ReactDOM.render(
      <BrowserRouter>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/add" component={AddForm}/>
        </div>
      </BrowserRouter>,  
    document.getElementById('root')
  );


