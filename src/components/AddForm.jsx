import React, {Component} from 'react';
import AddButton from './AddButton'
import { inputHandler } from '../modules/inputHandler'

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: {},
      info: {}
    }
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputs(e) {
    let {value, name} = e.target;
    if (name === 'value') {
      value = parseInt(value, 10);
    }
    let info = inputHandler(name, value);
    this.setState(prevState => ({
      transaction: {...prevState.transaction, [name] : value},
      info: {...prevState.info, [name] : info}
    }));
  }

  handleSubmit(submit) {
    if (submit) {
      this.props.onClick(this.state.transaction)
    }
  }

  confirmedData(info) {
    let infoValues = Object.values(info);
    let correctData = infoValues.filter(i => i === 'correct');
    if (correctData.length === 3) {
      return true
    } else return false
  }

  render() {
    let { info } = this.state;  
    return (
      <div>
        <form className="form-horizontal">
          <fieldset>
            <legend>Add transaction</legend>
            <div className="form-group col-lg-12">
              <div className="col-lg-4">
                <input
                  type="number"
                  className="form-control" 
                  name = "value"
                  onChange = {this.handleInputs}/>
              </div>
              <h4>{info.value}</h4>
            </div>
            <div className="form-group col-lg-12">
              <div className="col-lg-4">
                <select
                  id="selectType"
                  className='form-control'
                  name = "type"
                  onChange = {this.handleInputs}>
                  <option></option>
                  <option>income</option>
                  <option>consumption</option> 
                </select>
              </div>
              <h4>{info.type}</h4>            
            </div>
            <div className="form-group col-lg-12">
              <div className="col-lg-4">
                <input 
                  type="datetime-local" 
                  max="3000-12-30T00:00"
                  className='form-control'
                  name = "date"
                  onChange = {this.handleInputs}/>
              </div>
              <h4>{info.date}</h4>
            </div>
            <AddButton
              submit = {this.confirmedData(info)}
              onClick={this.handleSubmit}/>
          </fieldset>           
        </form>
      </div>
    )
  } 
}

export default AddForm

