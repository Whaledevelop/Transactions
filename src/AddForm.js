import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './bootstrap.css';
import './App.css';

export class AddForm extends Component {
  render () {
    return (
      <div>
        <h1> Hi </h1>
          <div>
            <Link to="/">
                <button type="button" className="btn btn-default" id="addButton">Transaction List</button>
            </Link>
          </div>        
      </div>
    )
  }
}

export default AddForm;