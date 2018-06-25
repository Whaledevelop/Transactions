import React from 'react';

import FiltersRowContainer from '../containers/FiltersRowContainer'
import ListContainer from '../containers/ListContainer'

const Transactions = () => {
  const size = 'col-lg-12'
  return (
    <div> 
      <FiltersRowContainer size={size}/>
      <ListContainer 
        filtering={true} 
        list='transactions' 
        size={size}
      />
    </div>
  )
}

export default Transactions