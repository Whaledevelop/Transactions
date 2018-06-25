import React from 'react'
import { connect } from 'react-redux'

import { switchMode} from '../actions'
import ModalsNavBar from '../components/modals/ModalsNavBar'

const ModalsNavContainer = ({ onSwitchMode, modals }) => (
  <ModalsNavBar 
    onClick = {name => onSwitchMode (name, 'modal')} 
    modals = {modals}
  />
)

const mapStateToProps = (state) => {
  return {
    modals: state.modals
  }
}

export default connect(
  mapStateToProps,
  {onSwitchMode: switchMode}
)(ModalsNavContainer)