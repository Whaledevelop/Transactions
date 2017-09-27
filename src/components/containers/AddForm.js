import React, {Component} from 'react';

import InputHandler from './InputHandler';
import FormButton from './FormButton';

class AddForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          type: 'income',
          date: '',
          valueStatus: '',
          dateStatus: ''
      }
      this.inputHandler = this.inputHandler.bind(this);
      this.inputStatusHandler = this.inputStatusHandler.bind(this);
      this.addConfirmedData = this.addConfirmedData.bind(this);
    }

    inputHandler() {
        let newValue = this.inputtedValue.value;
        let newType = this.inputtedType;
        let newDate = this.inputtedDate;
        this.setState ({
            value: newValue,
            type: newType,
            date: newDate
        }) 
    }

    inputStatusHandler(newValueStatus, newDateStatus) {
        this.setState({
            valueStatus: newValueStatus,
            dateStatus: newDateStatus
        })
    }

    addConfirmedData(creaftedId, confirmedValue, type, comfirmedDate) {
        this.props.onChange(creaftedId, confirmedValue, type, comfirmedDate);
        /*
        this.inputtedValue.value = '';
        this.inputtedType.value = 'income';
        this.inputtedDate.value = '';*/
    }

    render() {
        let {value, type, date, valueStatus, dateStatus} = this.state;
        return (
            <div>           
                <form className = "form-horizontal">
                    <fieldset>
                        <legend>Add transaction</legend>
                        <div className="form-group">
                            <div className="col-lg-4">
                                <label htmlFor="inputValue" className="control-label">Value</label>
                                <input type="text" id="inputValue" className="form-control"
                                    onChange={this.inputHandler}
                                    ref={(input) =>{this.inputtedValue = input }}/>
                            </div>
                            <div className="col-lg-6">
                                <InputHandler 
                                    input='value' 
                                    value={value}
                                    onChange={this.inputStatusHandler}/>
                            </div>   
                        </div>
                        <div className="form-group">
                            <div className="col-lg-4">
                                <label htmlFor="selectType" className="control-label">Type</label>
                                <select id="selectType" className="form-control"
                                    onChange={this.inputHandler}
                                    ref={input =>{this.inputtedType = input }}>
                                        <option>income</option>
                                        <option>consumption</option>
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <InputHandler 
                                    input='type' 
                                    type={type}
                                    onChange={this.inputStatusHandler}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-lg-4">                           
                                <label htmlFor="inputDate" className="control-label">Date</label>
                                <input type="datetime-local" id="inputDate" max="3000-12-30T00:00"
                                    className='form-control'
                                    onChange={this.inputHandler}
                                    ref={input =>{this.inputtedDate = input }}/>
                            </div>
                            <div className="col-lg-6">
                                <InputHandler 
                                    input='date' 
                                    date={date}
                                    onChange={this.inputStatusHandler}/>
                            </div>
                            <FormButton 
                                onClick={this.addConfirmedData}
                                valueStatus={valueStatus}
                                dateStatus={dateStatus}
                                value={value}
                                type={type}
                                date={date}/>    
                        </div>
                    </fieldset> 
                </form>
            </div>
        )
    }
}

export default AddForm;