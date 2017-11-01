import React, {Component} from 'react'
import { connect } from 'react-redux'
import { showModal } from '../actions/modalsActions'
import ModalsNavBar from '../components/modals/ModalsNavBar'

class ModalsNavContainer extends Component {
  render() {
    return (
      <ModalsNavBar onClick={name => this.props.onShowModal(name)} modals={this.props.modals}/>
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
  {onShowModal: showModal}
)(ModalsNavContainer)