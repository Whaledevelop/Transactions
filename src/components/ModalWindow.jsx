import React, {Component} from 'react'
import {Modal, Button} from 'react-bootstrap'

class ModalWindow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.hideModal = this.hideModal.bind(this)
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
    <Modal
      {...this.props}
      show={this.state.show}
      onHide={this.hideModal}
      dialogClassName="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-lg">
          {this.props.action}{' '}{this.props.object}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {this.props.children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.hideModal}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
  }
}

export default ModalWindow