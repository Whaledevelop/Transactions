import React, {Component} from 'react'
import {connect} from 'react-redux'
import AddContainer from './AddContainer'
import ModalWindow from '../components/ModalWindow'
import { turnModal } from '../actions/modalsActions'

class ModalContainer extends Component {
  renderModal() {
    let {modals} = this.props;
    console.log (modals);
    let activeModal = modals.find(modal => modal.active === true);
    if (activeModal !== undefined) {
      let {name, action, id} = activeModal;
      if (action === 'add') {
        let addData = {}
        if (name === 'Transaction') {
          addData = {
            object: 'transactions',
            inputes: [
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
            ]
          }
        } else if (name === 'Counterpart') {
          addData = {
            object: 'counterparts',
            inputes: [
              {
                name: "name",
                type: "text"
              }
            ]
          }
        } else if (name === 'Filter'){
          addData = {
            object: 'filters',
            inputes: [
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
            ]
          }     
        }
        return (
          <ModalWindow modal={name} action={action} onClick={() => this.props.onTurnModal(id)}>
            <AddContainer addData={addData} />
          </ModalWindow>
        )
      }      
    }
    return <div></div>    
  }

  render() {
    return this.renderModal()
  }
}

const mapStateToProps = (state) => {
  return {
    modals: state.modals,
  }
}

export default connect(
  mapStateToProps,
  {onTurnModal: turnModal}
)(ModalContainer)

/*            optionalObj: {
              object: 'counterparts',
              name: 'counterpartId',
              item: 'id'
            },*/