import React, {Component} from 'react'
import { connect } from 'react-redux'

import { addAction } from '../actions/addAction'
import { fetchAction } from '../actions/fetchAction'
import { nameInterpretator } from '../modules/nameInterpratator'
import AddForm from '../components/AddForm'

class AddContainer extends Component {
  componentWillMount(){
    let {preLoadData, addData} = this.props;
    preLoadData(addData.object);
    if (addData.object === 'transactions') {
      preLoadData('counterparts')  
    }
  }

  submitAdding(item) {
    let {addData, dataFromStore, onAddItem, preLoadData} = this.props;
    let newItem = Object.assign({}, item, {id: dataFromStore.id});
    if ((Object.keys(newItem).indexOf('filterBy') !== -1) 
      & (Object.keys(newItem).indexOf('name') !== -1)) {
        let additionalData = nameInterpretator(newItem.name, newItem.filterBy)
        newItem = Object.assign({}, newItem, additionalData)
    }
    onAddItem(newItem, addData.object);
    preLoadData(addData.object);
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
    preLoadData: fetchAction
  }
)(AddContainer);