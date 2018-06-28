import React, { Component } from 'react';
import {firstLetterUpperCase} from '../../../../modules/firstLetterUpperCase'

import {filterByValueDescriptor} from '../../../../modules/descriptors/filterByValueDesctriptor'
import {filterByTypeDescriptor} from '../../../../modules/descriptors/filterByTypeDesctriptor'
import {filterByDateDescriptor} from '../../../../modules/descriptors/filterByDateDesctriptor'

class DescriptiveInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
    this.filterByValueDescriptor = filterByValueDescriptor;
    this.filterByTypeDescriptor = filterByTypeDescriptor;
    this.filterByDateDescriptor = filterByDateDescriptor;
  }

  componentWillReceiveProps(nextProps) {
    const {descriptorKey} = nextProps.input
    const descriptorValue = nextProps.newItem[descriptorKey];
    if (descriptorValue !== this.props.newItem[descriptorKey]) {
      const [descriptedObject, infoObj] = this.descriptInputValue(
        this.state.value, descriptorKey, descriptorValue
      )
      this.props.onChange(descriptedObject, infoObj);
    }
  }

  descriptInputValue(inputValue, descriptorKey, descriptorValue) {
    const valueArray = inputValue.toLowerCase().split(' ');
    if (descriptorKey === "filterBy") {
      if (descriptorValue !== undefined && descriptorValue !== "") {
        const [value, unit, info] = this[
          `filterBy${firstLetterUpperCase(descriptorValue)}Descriptor`
        ](valueArray);
        return [
          { [this.props.input.name]: inputValue, value: value, unit: unit },
          { [this.props.input.name]: info }
        ]
      } else {
        return [
          {}, {[this.props.input.name] : "Fill 'filterBy' firstly"}
        ]
      }
    } else {
      return null
    }
  }


  handleChange(e) {
    const {input, newItem, onChange} = this.props;
    const descriptorValue = newItem[input.descriptorKey]
    const [descriptedObject, infoObj] = this.descriptInputValue(
      e.target.value, input.descriptorKey, descriptorValue
    )
    onChange(descriptedObject, infoObj);
    this.setState({
      value : e.target.value
    })
  }

  render() { 
    return (  
      <input
        className="form-control"
        type = "text"
        onChange = {this.handleChange.bind(this)}
      />
    )
  }
}
 
export default DescriptiveInput;