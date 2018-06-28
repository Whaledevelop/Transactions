import React, {Component} from 'react';
import moment from 'moment';  

class DefaultInput extends Component {
  getInputInfo(type, value) {
    switch (type) {
      case "number" : {
        if (value === '') {
          return ''       
        } else if (isNaN(value)) {
          return 'Enter numbers'
        } else if (value < 0) {
          return 'Enter positive number'
        } else if (value > 1000000000) {
          return 'Too much'
        } else {
          return 'correct'
        }
      }
      case "text" : {
        return value === "" ? "" : "correct"
      }
      case "datetime-local" : {
        let dateForComparison = moment(value).format('YYYYMMDD');
        let now = moment().format('YYYYMMDD');
        let lowestAvailableDate = moment().subtract(50, 'years').format('YYYYMMDD');
        if (value === '') {
          return ''
        } else if (dateForComparison > now) {
          return 'Only past transactions'
        } else if (dateForComparison < lowestAvailableDate) {
          return 'Too old'
        } else {
          return 'correct'
        }
      }
      default: return null
    }
  }

  handleChange(e){
    const value = this.props.input.type === "number" 
      ? +e.target.value : e.target.value
    const info = this.getInputInfo(this.props.input.type, value)
    this.props.onChange( 
      {[e.target.name]: value}, 
      {[e.target.name]: info} 
    );
  }

  render () {
    return (
      <input
        className="form-control"
        {...this.props.input}
        onChange = {this.handleChange.bind(this)}
      />
    )
  }
}

export default DefaultInput