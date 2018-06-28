import React, {Component} from 'react';

import AddButton from './AddButton';

class AddFormFooter extends Component {
  handleAddStatus() {
    switch (this.props.addStatus) {
      case "Ready" : {
        return {
          className: "btn btn-primary",
          message: "Correct data. Ready to add"
        }
      }
      case "Not ready" : {
        return {
          className: "btn btn-primary disabled",
          message: ""
        }
      }
      case "Rejected" : {
        return {
          className: "btn btn-warning",
          message: "Fill all inputs with correct data"
        } 
      }
      case "Done" : {
        return {
          className: "btn btn-success",
          message: "Done. Well done"
        }
      }
      case "Overrejected" : {
        return {
          className: "btn btn-danger",
          message: "Don't be angry. Fill inputs"
        }
      }
      default: return null
    }
  }

  render() {
    const {className, message} = this.handleAddStatus();
    return (
      <div className='col-lg-12'>
        <AddButton
          className = {className}
          addStatus = {this.props.addStatus}
          onClick = {this.props.onClick}
        />
        <div className="addMessage">
          {message}
        </div>
      </div>
    )
  }   
}

export default AddFormFooter;