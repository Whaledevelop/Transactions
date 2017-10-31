import React, {Component} from 'react'
import {connect} from 'react-redux'

import AddContainer from './AddContainer'
import DefaultModal from '../components/modals/DefaultModal'
import ProgressModal from '../components/modals/ProgressModal'
import { turnAddModal, turnProgressModal } from '../actions/modalsActions'

class ModalContainer extends Component {
  renderModal() {
    let {modals} = this.props;
    let activeModal = modals.find(modal => modal.active === true);
    if (activeModal !== undefined) {
      let {name, action, id} = activeModal;
      if (action === 'add') {
        let addData = {}
        if (name === 'transaction') {
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
        } else if (name === 'counterpart') {
          addData = {
            object: 'counterparts',
            inputes: [
              {
                name: "name",
                type: "text"
              }
            ]
          }
        } else if (name === 'filter'){
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
          <DefaultModal modal={name} action={action} onClick={() => this.props.onTurnAddModal(id)}>
            <AddContainer addData={addData}/>
          </DefaultModal>
        )
      } else if (action === 'progress') {
        setTimeout(() => this.props.onTurnProgressModal(name), 2000);
        return (
          <ProgressModal modal={name}/>
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
  {
    onTurnAddModal: turnAddModal,
    onTurnProgressModal: turnProgressModal
  }
)(ModalContainer)
