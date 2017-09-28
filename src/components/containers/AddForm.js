import React, {Component} from 'react';

import InputHandler from './InputHandler';
import FormButton from './FormButton';

class AddForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          transaction: {
                value: '',
                type: '',
                date: ''
          },
          blockAddButton: true 
      }
      this.inputHandler = this.inputHandler.bind(this);
      this.inputStatusHandler = this.inputStatusHandler.bind(this);
      this.addConfirmedData = this.addConfirmedData.bind(this);
    }

    inputHandler() {
        let newValue = this.inputtedValue.value;
        let newType = this.inputtedType.value;
        let newDate = this.inputtedDate.value;
        this.setState({
            transaction: {
                value: newValue,
                type: newType,
                date: newDate
            }      
        })
    }
 

    inputStatusHandler(valueStatus, typeStatus, dateStatus) {
        if (valueStatus === 'correct' & typeStatus === 'correct' & dateStatus === 'correct') {
                console.log('correct');
                this.setState({
                    blockAddButton: ''
                })
        }
    }

    addConfirmedData(craftedId) {
        let {value, type, date} = this.state.transaction;
        this.props.onClick(craftedId, value, type, date);
        this.inputtedValue.value = '';
        this.inputtedType.value = '';
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
                                    ref={(input) =>{this.inputtedValue = input }}/>
                            </div>
                            <div className="col-lg-6">
                                <InputHandler
                                    input='value' 
                                    transaction={this.state.transaction}
                                    onConfirm={this.inputStatusHandler}
                                />
                            </div>   
                        </div>
                        <div className="form-group">
                            <div className="col-lg-4">
                                <label htmlFor="selectType" className="control-label">Type</label>
                                <select id="selectType" className="form-control"
                                    onChange={this.inputHandler}
                                    ref={input =>{this.inputtedType = input }}>
                                        <option></option>
                                        <option>income</option>
                                        <option>consumption</option>
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <InputHandler
                                    input='type'
                                    transaction={this.state.transaction}
                                    onConfirm={this.inputStatusHandler}
                                    />   
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
                                        transaction={this.state.transaction}
                                        onConfirm={this.inputStatusHandler}
                                        />
                                </div>                                
                        </div>
                        <FormButton 
                            //block={this.state.blockAddButton}
                            onClick={this.addConfirmedData}/>
                    </fieldset> 
                </form>
            </div>
        )
    }
}

export default AddForm;