import React from 'react'

import AddForm from '../containers/AddForm'
import Header from '../components/Header'
import Transactions from '../containers/Transactions'

const App = () => (    
    <div className='container'>
            <div className='row'>
                        <AddForm/>
                        <Header/>
                        <Transactions/>
            </div>
    </div>
)

export default App