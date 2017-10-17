import React, {Component} from 'react';

import { valueHandler } from '../components/add/handlers/valueHandler';
import { typeHandler } from '../components/add/handlers/typeHandler';
import { dateHandler } from '../components/add/handlers/dateHandler';

import Input from '../components/add/Input'
import AddButton from '../components/add/AddButton';

class AddContainer extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        value: '',
                        type: '',
                        date: '',
                        valueStatus: '',
                        typeStatus: '',
                        dateStatus: '',
                        submit: false
                }
                this.inputHandler = this.inputHandler.bind(this);
        }

        inputHandler(name, inputValue) {           
                if (name === 'Value') {
                        let valueStatus = valueHandler(inputValue);
                        this.setState ({
                                value : inputValue,
                                valueStatus: valueStatus
                        })
                } else if (name === 'Type') {
                        let typeStatus = typeHandler(inputValue);
                        this.setState ({ 
                                type : inputValue,
                                typeStatus: typeStatus
                        })
                } else if (name === 'Date') {
                        let dateStatus = dateHandler(inputValue);
                        this.setState ({ 
                                date : inputValue,
                                dateStatus: dateStatus
                        })
                }     
        }

        addConfirmedData(){
                let { value, type, date, valueStatus, typeStatus, dateStatus } = this.state;
                if (valueStatus === 'correct' & typeStatus === 'correct' & dateStatus === 'correct') {
                        this.setState({
                                submit: true
                        })
                        this.props.onClick(value, type, date)
                }
        }
 
        render() {
                return (
                        <div>           
                                <form className = "form-horizontal">
                                        <fieldset>
                                                <legend>Add transaction</legend>
                                                <Input
                                                        inputType='text'
                                                        onChange={this.inputHandler}
                                                        name="Value"/>
                                                <div className="col-lg-6">
                                                        <h4>{this.state.valueStatus}</h4>
                                                </div>
                                                <Input
                                                        inputType='select'
                                                        onChange={this.inputHandler}
                                                        name="Type"
                                                        values={['income', 'consumption']}/>
                                                <div className="col-lg-6">
                                                        <h4>{this.state.typeStatus}</h4>
                                                </div>
                                                <Input
                                                        inputType='date'
                                                        onChange={this.inputHandler}
                                                        name="Date"/>
                                                <div className="col-lg-6">
                                                        <h4>{this.state.dateStatus}</h4>
                                                </div>                                                      
                                                <AddButton 
                                                        onClick={this.addConfirmedData.bind(this)}/>
                                        </fieldset> 
                                </form>
                        </div>
                )
        }
}

export default AddContainer;