import React from 'react';
import AddContainer from '../containers/AddContainer'

const AddCounterpart = () => (
  <AddContainer 
    object = 'counterparts'
    inputes = {[
      {
        name: "name",
        type: "text"
      }
    ]}/>
)

export default AddCounterpart