import React, {Component} from 'react'
import { connect } from 'react-redux'

import { addAction } from '../actions/addAction'
import { fetchAction } from '../actions/fetchAction'
import { turnProgressModal } from '../actions/modalsActions'
import { nameInterpretator } from '../modules/nameInterpratator'
import AddForm from '../components/add/AddForm'

class AddContainer extends Component {
  componentWillMount(){
    let {onFetchData, addData} = this.props;
    onFetchData(addData.object);
    if (addData.object === 'transactions') {
      onFetchData('counterparts')  
    }
  }

  submitAdding(item) {
    let {addData, dataFromStore, onAddItem, onFetchData, onTurnProgressModal} = this.props;
    let newItem = Object.assign({}, item, {id: dataFromStore.id});
    if ((Object.keys(newItem).indexOf('filterBy') !== -1) 
      & (Object.keys(newItem).indexOf('name') !== -1)) {
        let additionalData = nameInterpretator(newItem.name, newItem.filterBy)
        newItem = Object.assign({}, newItem, additionalData)
    }
    onAddItem(newItem, addData.object);
    onTurnProgressModal('success') 
    onFetchData(addData.object);
    
  } 
  
  render() {
    let {addData, dataFromStore} = this.props
    if (addData.object === 'transactions') {
      let counterpartsIndex = addData.inputes.findIndex(input => input.name === 'counterpartId')
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
  let {object} = ownProps.addData;
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
    onAddItem: addAction,
    onFetchData: fetchAction,
    onTurnProgressModal: turnProgressModal
  }
)(AddContainer);