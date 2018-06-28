import React, {Component} from 'react'
import { connect } from 'react-redux'

import { add, fetch, switchMode } from '../actions'
import AddFormContainer from './AddFormContainer';

class AddContainer extends Component {
  componentWillMount(){
    const {onFetchData, addObjKey} = this.props;
    onFetchData(addObjKey);
    if (addObjKey === 'transactions') {
      onFetchData('counterparts')  
    }
    onFetchData('addInputs')
  }

  submitAdding(newItem) {
    const {addObjKey, nextId, onAddItem, onFetchData, onSwitchMode} = this.props;
    const newItemWithId = {id: nextId, ...newItem};
    onAddItem(newItemWithId, addObjKey);
    onSwitchMode('success', 'modal');
  } 
  
  render() {    
    return (
      <AddFormContainer
        addFormData = {this.props.addFormData}
        fetched = {this.props.fetched}
        onSubmit = {this.submitAdding.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const addObj = state[ownProps.addObjKey] // Объект с свойствами добавляемого объекта
  const fetched = addObj.fetched && state.addInputs.fetched;
  /*
    addFormData - данные об инпутах формы для добавления определенного 
    объекта: транзакции, контрагента или фильтра. У них разные инпуты
  */
  const addFormData = state.addInputs.data[ownProps.addObjKey];
  if (fetched) {
    /*
      В форме для добавления транзакции нужно указать id контрагента из списка,
      являющегося массивом с id всех действующих контрагентов. Т.к. количество
      контрагентов может меняться, то эту информацию нужно добавлять дополнительно
      для настоящего времени
    */
    if (ownProps.addObjKey === 'transactions') {
      if (state['counterparts'].fetched) {
        const counterpartsId = state['counterparts'].data.map(counterpart => {
          return counterpart.id
        })
        const selectCounterpartInput = addFormData.find(input => (
          input.name === "counterpartId"
        ))
        selectCounterpartInput.selectValues = counterpartsId;
      }
    }
  }  
  return {
    addFormData: addFormData,
    fetched: fetched,
    nextId: addObj.data.length + 1
  }
}

export default connect(
  mapStateToProps,
  {
    onAddItem: add,
    onFetchData: fetch,
    onSwitchMode: switchMode
  }
)(AddContainer);