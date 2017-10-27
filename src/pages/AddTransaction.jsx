import React, {Component} from 'react';

import AddForm from '../containers/AddForm';

class AddTransaction extends Component {
  render () {     
    return (
      <AddForm 
        inputes = {[
          {
            name: 'value',
            type: 'numbers',
          },
          {
            name: 'type',
            type: 'select',
            selectValues: ['', 'income', 'consumption'],
          },
          {
            name: 'date',
            type: 'date',
          }
        ]}
        object = 'transactions'/> 
    ) 
  }
}

export default AddTransaction