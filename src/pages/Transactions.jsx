import React from 'react';
import FiltersContainer from '../containers/FiltersContainer'
import ListContainer from '../containers/ListContainer'

const Transactions = () => (    
  <div> 
    <FiltersContainer size='col-lg-12'/>
    <ListContainer filtering={true} list='transactions' size='col-lg-12'/>
  </div>
)

export default Transactions