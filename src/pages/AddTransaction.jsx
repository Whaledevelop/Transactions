import React from 'react';
import { Link } from 'react-router-dom';
import AddContainer from '../containers/AddContainer'

const AddTransaction = () => (    
  <div className='container'>
    <div className='row'>
      <Link to='/'>
        <button className="authenticButton btn btn-primary">
          Transactions
        </button>
      </Link>
      <AddContainer object = 'transactions'/>
    </div>
  </div>
)

export default AddTransaction