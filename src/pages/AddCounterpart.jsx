import React from 'react';
import AddContainer from '../containers/AddContainer'
import Modal from '../components/Modal'

const AddCounterpart = () => (
  <Modal>
    <AddContainer 
      object = 'counterparts'
      inputes = {[
        {
          name: "name",
          type: "text"
        }
      ]}/>
  </Modal> 
)

export default AddCounterpart

