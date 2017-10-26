import React from 'react';
import { Link } from 'react-router-dom';

import Filters from '../containers/Filters'
import Transactions from '../containers/Transactions'

const App = () => (    
    <div className='container'>
            <div className='row'>
                        <Link to='/add'>
                                <button className="authenticButton btn btn-primary">
                                        Add Transaction
                                </button>
                        </Link>
                        <Filters/>
                        <Transactions/>
            </div>
    </div>
)

export default App