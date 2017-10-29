import React from 'react';

import FiltersContainer from '../containers/FiltersContainer'
import ListContainer from '../containers/ListContainer'
import Menu from '../components/Menu'

const Transactions = () => (    
  <div className='container'>
    <div className='row'>
      <Menu/>
      <h2>Transactions list</h2>
      <FiltersContainer size='col-lg-12'/>
      <ListContainer filtering={true} list='transactions' size='col-lg-12'/>
    </div>
  </div>
)

export default Transactions