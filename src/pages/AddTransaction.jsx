import React from 'react';
import { Link } from 'react-router-dom';

import AddForm from '../containers/AddForm'

const AddTransaction = () => (    
    <div className='container'>
            <div className='row'>
                        <Link to='/'>
                                <button className="authenticButton btn btn-primary">
                                        Transactions
                                </button>
                        </Link>
                        <AddForm/>
            </div>
    </div>
)

export default AddTransaction