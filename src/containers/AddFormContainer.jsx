import React, {Component} from 'react'

import AddForm from '../components/add/AddForm';

class AddFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: {},
      info: {}
    }
    this.handleInputsChange = this.handleInputsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputsChange(addValuesObj, infoObj) {
    this.setState(prevState => ({
      newItem: {...prevState.newItem, ...addValuesObj},
      info: {...prevState.info, ...infoObj}
    }));
  }

  handleSubmit() {
    this.props.onSubmit(this.state.newItem)
  }

  render() {
    return (
      <AddForm
        fetched = {this.props.fetched}
        addFormData = {this.props.addFormData}
        newItem = {this.state.newItem}
        info = {this.state.info}
        onChange = {this.handleInputsChange}
        onSubmit = {this.handleSubmit}
      />
    )
  }
}

export default AddFormContainer