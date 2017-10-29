import React from 'react'

import ListContainer from '../containers/ListContainer'
import Menu from '../components/Menu'

const Counterparts = () => (    
  <div className='container'>
    <div className='row'>
      <Menu/>
      <ListContainer filtering={false} list='filters' size='col-lg-12'/>
    </div>
  </div>
)

export default Counterparts