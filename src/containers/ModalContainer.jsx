import React, {Component} from 'react'
import {connect} from 'react-redux'

import AddContainer from './AddContainer'
import DefaultModal from '../components/modals/DefaultModal'
import ProgressModal from '../components/modals/ProgressModal'
import { switchMode } from '../actions'
import axios from 'axios';

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addInputs: null
    }
    this.switchModalMode = this.switchModalMode.bind(this)
  }

  switchModalMode(name) {
    this.props.onSwitchMode(name, 'modal')
  }

  componentWillMount() {
    axios.get("http://localhost:3333/addInputs")
      .then(response => {
        this.setState({ addInputs: response.data });
      })
      .catch(error => { console.log (error) }) 
  }

  render() {
    let activeModal = this.props.modals.find(modal => (
      modal.active === true
    ));
    if (activeModal !== undefined) {
      const {action, name} = activeModal;
      switch (action) {
        case "add" : {
          if (this.state.addInputs !== null) {
            return (
              <DefaultModal 
                modal={name} 
                action={action} 
                onClick={this.switchModalMode}
              >
                <AddContainer 
                  addData={this.state.addInputs}
                />
              </DefaultModal>
            )
          } else return null 
        }
        case "progress" : {
          setTimeout(this.switchModalMode, 2000);
          return (
            <ProgressModal modal={name}/>
          )
        }
        default: return null
      }   
    } else return null
  }
}

const mapStateToProps = (state) => {
  return {
    modals: state.modals,
  }
}

export default connect(
  mapStateToProps,
  {onSwitchMode: switchMode}
)(ModalContainer)
