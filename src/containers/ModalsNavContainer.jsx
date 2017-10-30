import React, {Component} from 'react'
import { connect } from 'react-redux'
import { turnModal } from '../actions/modalsActions'
import ModalsNavBar from '../components/ModalsNavBar'

class ModalsNavContainer extends Component {
  render() {
    return (
      <ModalsNavBar onClick={id => this.props.onTurnModal(id)} modals={this.props.modals}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modals: state.modals
  }
}

export default connect(
  mapStateToProps,
  {onTurnModal: turnModal}
)(ModalsNavContainer)