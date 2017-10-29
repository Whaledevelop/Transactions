import React from 'react';
import AddContainer from '../containers/AddContainer'

const AddTransaction = () => (
  <AddContainer 
    object = 'transactions'
    optionalObj = 'counterparts'
    optionalObjName = 'counterpartId'
    inputes={[
      {
        name: 'value',
        type: 'number'
      },
      {
        name: 'type',
        type: 'select',
        selectValues: ['', 'income', 'consumption'],
        dataType: 'text'
      },
      {
        name: 'date',
        type: 'date'
      },
      {
        name: 'counterpartId',
        type: 'select',
        selectValues: [],
        dataType: 'numbers'
      }
    ]}/>
)

export default AddTransaction