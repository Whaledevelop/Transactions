import React from 'react'
import { Link } from 'react-router-dom'

import AddForm from '../containers/AddForm'
import Header from '../components/Header'
import Transactions from '../containers/Transactions'

const App = () => (
    <div className='container'>
            <div className='row'>
                        <Link to="/addTransaction">
                                <button className='btn btn-danger authenticButton'>
                                        Add transaction
                                </button>
                        </Link>
                        <Link to="/addFilter">
                                <button className='btn btn-success authenticButton right'>
                                        Add filter
                                </button>
                        </Link>
                        <AddForm/>
                        <Header/>
                        <Transactions/>
            </div>
    </div>
)

export default App