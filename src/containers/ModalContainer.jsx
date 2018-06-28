import React, {Component} from 'react'
import {connect} from 'react-redux'

import { switchMode } from '../actions'
import ModalWindow from '../components/modals/ModalWindow';

class ModalContainer extends Component {
  handleSwitchMode(name) {
    this.props.onSwitchMode(name, "modal")
  }

  render() {
    return (
      <ModalWindow
        modal = {this.props.modal}
        onSwitchMode = {this.handleSwitchMode.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const activeModal = state.modals.find(modal => (
    modal.active === true
  ));
  return {
    modal: activeModal,
  }
}

export default connect(
  mapStateToProps,
  {onSwitchMode: switchMode}
)(ModalContainer)
