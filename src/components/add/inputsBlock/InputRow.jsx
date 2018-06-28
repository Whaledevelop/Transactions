import React, { Component } from 'react';

import DefaultInput from './inputs/DefaultInput';
import Select from './inputs/Select';
import ColorsButtons from './inputs/ColorsButtons'
import InputInfo from './InputInfo'
import DescriptiveInput from './inputs/DescriptiveInput';

class InputRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoText: ""
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(addValuesObj, infoObj) {
    this.props.onChange(addValuesObj, infoObj);
    this.setState({ 
      infoText: infoObj[this.props.input.name]
    });
  } 

  renderInput() {
    switch (this.props.input.type) {
      case "number" :
      case "text" :
      case "datetime-local" : {
        return (
          <DefaultInput
            input = {this.props.input}
            onChange = {this.handleInput}
          />
        )
      }
      case "descriptive" : {
        return (
          <DescriptiveInput
            input = {this.props.input}
            newItem = {this.props.newItem}
            onChange = {this.handleInput}
          />
        )
      }
      case "select": {
        return (
          <Select
            input = {this.props.input}
            onChange = {this.handleInput}
          />
        )     
      }
      case "colors": {
        return (
          <ColorsButtons
            input = {this.props.input}
            onClick={this.handleInput} 
          />
        )
      }
      default: return <input type = "text"/>
    }
  }
  
  render() { 
    return (  
      <div className="form-group">
        <label>
          {this.props.input.name}
        </label>  
        {this.renderInput()}
        <InputInfo
          info = {this.state.infoText}
        />
      </div>
    )
  }
}
 
export default InputRow;