import React, {Component} from 'react';


import AddForm from '../containers/AddForm';

class AddFilter extends Component {
  render () {     
    return (
      <AddForm 
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
            name: 'className',
            type: 'colors',
            colors: ['red', 'orange', 'lightblue', 'deepblue', 'green']
          }                                                        
        ]}
        object = 'filters'/> 
    )
  }
}

export default AddFilter