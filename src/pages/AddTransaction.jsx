import React from 'react'
import { Link } from 'react-router-dom'

const AddTransactions = () => (
    <div className='container'>
            <div className='row'>
                <Link to="/">
                <button className='btn btn-primary authenticButton'>
                        Main page
                </button>
                </Link>
            </div>
    </div>
)

export default AddTransactions