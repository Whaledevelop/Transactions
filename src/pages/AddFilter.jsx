import React from 'react';
import AddContainer from '../containers/AddContainer'

const AddFilter = () => (
  <AddContainer
    object = 'filters' 
    inputes = {[
      {
        name: 'filterBy',
        type: 'select',
        selectValues: ['', 'value', 'type', 'date']
      },
      {
        name: 'name',
        type: 'description',
      },
      {
        name: 'color',
        type: 'colors',
        colors: ['red', 'orange', 'lightblue', 'deepblue', 'green']
      }                                                            
    ]}/> 
)

export default AddFilter