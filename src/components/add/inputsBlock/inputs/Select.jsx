import React, { Component } from 'react';

class Select extends Component {
  handleSelect(e) {
    const {input, onChange} = this.props
    let {name, value} = e.target
    value = input.selectValuesType === "number" 
      ? +value : value
    const info = value === "" 
      ? "Select one of the options"
      : (
        input.selectValues.indexOf(value) !== -1
          ? "correct" 
          : ""
      )
    onChange( { [name]: value }, {[name] : info})
  }

  render() { 
    return (  
      <select
        style={{width: "405px",	height: "48px"}}
        className='form-control'
        name = {this.props.input.name}
        onChange = {this.handleSelect.bind(this)}
      >
        <option></option>
        {this.props.input.selectValues.map(( selectValue, i ) => (
          <option key={i}>
            {selectValue}
          </option>
        ))}
      </select>
    )
  }
}
 
export default Select;