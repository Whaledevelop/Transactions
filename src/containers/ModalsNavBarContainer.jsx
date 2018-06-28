import React from 'react'
import { connect } from 'react-redux'

import { switchMode} from '../actions'
import ModalsNavBar from '../components/modals/ModalsNavBar'

const ModalsNavBarContainer = ({ modals, onSwitchMode }) => (
  <ModalsNavBar 
    modals = {modals}
    label = "Add"
    onSwitchMode = {name => onSwitchMode (name, 'modal')} 
  />
)

const mapStateToProps = (state) => {
  const addModals = state.modals.filter(modal => modal.action === 'add');
  return {
    modals: addModals
  }
}

export default connect(
  mapStateToProps,
  {onSwitchMode: switchMode}
)(ModalsNavBarContainer)