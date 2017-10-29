import React from 'react'

import ListContainer from '../containers/ListContainer'
import Menu from '../components/Menu'

const Counterparts = () => (    
  <div className='container'>
    <div className='row'>
      <Menu/>
      <ListContainer filtering={false} list='counterparts' size='col-lg-4'/>
    </div>
  </div>
)

export default Counterparts