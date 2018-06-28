import React, {Component} from 'react';

import AddContainer from '../../containers/AddContainer'
import DefaultModal from './DefaultModal'
import ProgressModal from './ProgressModal'

class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.switchModalMode = this.switchModalMode.bind(this)
  }
  
  switchModalMode() {
    this.props.onSwitchMode(this.props.modal.name)
  }

  render() {
    const {modal, addInputs} = this.props;
    if (modal !== undefined) {
      const {action, name} = modal;
      switch (action) {
        case "add" : {
          if (addInputs !== null) {
            return (
              <DefaultModal 
                name={name} 
                action={action} 
                onClick={this.switchModalMode}
              >
                <AddContainer 
                  addObjKey = {name + "s"}
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
    } else {
      return null
    }
  }
}
 
export default ModalWindow;