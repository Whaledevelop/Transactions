import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route} from 'react-router-dom';

import './index.css';
import App from './App';
import AddForm from './AddForm';

ReactDOM.render(
      <HashRouter>
        <div>
          <Route exact path="/" component={App}/>
          <Route path="/add" component={AddForm}/>
        </div>
      </HashRouter>,
    document.getElementById('root')
  );

