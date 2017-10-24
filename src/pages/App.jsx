import React from 'react'
import AddTransaction from '../containers/AddTransaction'
import Filters from '../components/Filters'
import Transactions from '../containers/Transactions'

const App = () => (
    <div>
        <AddTransaction/>
        <Filters/>
        <Transactions/>
    </div>
)

export default App