import React, {Component} from 'react'
import {connect} from 'react-redux'
import AddContainer from './AddContainer'
import ModalWindow from '../components/ModalWindow'

class ModalContainer extends Component {
  renderModal() {
    let {modals} = this.props;
    console.log (modals);
    let activeModal = modals.find(modal => modal.active === true);
    if (activeModal !== undefined) {
      if (activeModal.action === 'add') {
        let addData = {}
        if (activeModal.name === 'Transaction') {
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
        } else if (activeModal.name === 'Counterpart') {
          addData = {
            object: 'counterparts',
            inputes: [
              {
                name: "name",
                type: "text"
              }
            ]
          }
        } else if (activeModal.name === 'Filter'){
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
          <ModalWindow modal={activeModal.name} action='Add'>
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
    modals: state.modals
  }
}

export default connect(
  mapStateToProps
)(ModalContainer)

/*            optionalObj: {
              object: 'counterparts',
              name: 'counterpartId',
              item: 'id'
            },*/