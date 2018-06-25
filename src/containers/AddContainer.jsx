import React, {Component} from 'react'
import { connect } from 'react-redux'

import { add, fetch, switchMode } from '../actions'

import { nameInterpretator } from '../modules/nameInterpratator'
import AddForm from '../components/add/AddForm'

class AddContainer extends Component {
  componentWillMount(){
    const {onFetchData, addData} = this.props;
    console.log (addData);
    onFetchData(addData.object);
    if (addData.object === 'transactions') {
      onFetchData('counterparts')  
    }
  }

  submitAdding(item) {
    const {addData, dataFromStore, onAddItem, onFetchData, onShowModal} = this.props;
    let newItem = Object.assign({}, item, {id: dataFromStore.id});
    if ((Object.keys(newItem).indexOf('filterBy') !== -1) 
      & (Object.keys(newItem).indexOf('name') !== -1)) {
        const additionalData = nameInterpretator(newItem.name, newItem.filterBy)
        newItem = Object.assign({}, newItem, additionalData)
    }
    onAddItem(newItem, addData.object);
    onShowModal('success', 'modal') 
    onFetchData(addData.object);   
  } 
  
  render() {
    let {addData, dataFromStore} = this.props
    if (addData.object === 'transactions') {
      const counterpartsIndex = addData.inputes.findIndex(input => input.name === 'counterpartId')
      addData.inputes[counterpartsIndex].selectValues = dataFromStore.counterpartsId
    }
    
    return (
      <AddForm 
        onClick={this.submitAdding.bind(this)}
        addData={addData}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log (ownProps);
  console.log (state)
  const {object} = ownProps.addData;
  let dataFromStore = {
    id: state[object][object].length + 1
  }
  if (object === 'transactions') {
    dataFromStore['counterpartsId'] = state['counterparts']['counterparts'].map(counterpart => {
      return counterpart.id
    })
    dataFromStore['counterpartsId'].unshift('');
  }
  return {
    dataFromStore: dataFromStore
  }
}

export default connect(
  mapStateToProps,
  {
    onAddItem: add,
    onFetchData: fetch,
    onShowModal: switchMode
  }
)(AddContainer);