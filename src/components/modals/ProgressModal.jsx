import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {firstLetterUpperCase} from '../../modules/functional/firstLetterUpperCase'
          
class ProgressModal extends Component {
  progressModalStyle() {
    if(this.props.modal === 'success') {
      return {backgroundColor: '#5CB85C'}
    }
  }

  render() {
    return (
    <Modal
      {...this.props}
      show={true}
      dialogClassName="custom-modal">
      <Modal.Body>
        <div className="progressModal" style={this.progressModalStyle()}>
          <h2 className="progressModalLabel">
            {firstLetterUpperCase(this.props.modal)}
          </h2>
        </div>
      </Modal.Body>
    </Modal>
    )
  }
}

export default ProgressModal
