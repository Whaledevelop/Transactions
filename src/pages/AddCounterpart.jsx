import React from 'react';
import AddContainer from '../containers/AddContainer'

const AddTransaction = () => (
  <AddContainer 
    object = 'counterparts'
    inputes = {[
      {
        name: "name",
        type: "text"
      }
    ]}/>
)

export default AddTransaction