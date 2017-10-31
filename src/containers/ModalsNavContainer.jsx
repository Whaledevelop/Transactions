import React, {Component} from 'react'
import { connect } from 'react-redux'
import { turnAddModal } from '../actions/modalsActions'
import ModalsNavBar from '../components/modals/ModalsNavBar'

class ModalsNavContainer extends Component {
  render() {
    return (
      <ModalsNavBar onClick={id => this.props.onTurnAddModal(id)} modals={this.props.modals}/>
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
  {onTurnAddModal: turnAddModal}
)(ModalsNavContainer)