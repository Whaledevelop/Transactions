import React, {Component} from 'react';

import InputHandler from '../containers/InputHandler';

class AddForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          valueStatus: '',
          dateStatus: ''
      }
      this.inputStatusHandler = this.inputStatusHandler.bind(this);
      this.addConfirmedData = this.addConfirmedData.bind(this);
    }

    inputStatusHandler(newValueStatus, newDateStatus) {
        this.setState({
            valueStatus: newValueStatus,
            dateStatus: newDateStatus
        })
    }

    addConfirmedData(creaftedId, confirmedValue, type, comfirmedDate) {
        this.props.onChange(creaftedId, confirmedValue, type, comfirmedDate);
        this.inputtedValue.value = '';
        this.inputtedType.value = 'income';
        this.inputtedDate.value = '';
    }

    render() {
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
                                    ref={input =>{this.inputtedValue = input }}/>
                            </div>
                            <div className="col-lg-6">
                                <InputHandler 
                                    input='value' 
                                    value={this.inputtedValue}
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
                                    type={this.inputtedType}
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
                                    date={this.inputtedDate}
                                    onChange={this.inputStatusHandler}/>
                            </div>
                            <FormButton 
                                onChange={this.addConfirmedData}
                                valueStatus={this.state.valueStatus}
                                dateStatus={this.state.dateStatus}/>    
                        </div>
                    </fieldset> 
                </form>
            </div>
        )
    }
}

export default AddForm;