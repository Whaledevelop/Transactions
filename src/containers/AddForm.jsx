import React, {Component} from 'react';

import Input from '../components/Input';
import AddButton from '../components/AddButton';

import { valueHandler } from '../components/handlers/valueHandler';
import { typeHandler } from '../components/handlers/typeHandler';
import { dateHandler } from '../components/handlers/dateHandler';

class AddForm extends Component {
                constructor(props) {
                                super(props);
                                this.state = {
                                                value: '',
                                                type: '',
                                                date: '',
                                                valueStatus: '',
                                                typeStatus: '',
                                                dateStatus: ''
                                }
                                this.inputsHandler = this.inputsHandler.bind(this);
                                this.addData = this.addData.bind(this)
                }

                inputsHandler(name, value) {
                                if (name === 'Value') {
                                                let valueStatus = valueHandler(value);
                                                this.setState({
                                                                value: value,
                                                                valueStatus: valueStatus
                                                })
                                } else if (name === 'Type') {
                                                let typeStatus = typeHandler(value); 
                                                this.setState({
                                                                type: value,
                                                                typeStatus: typeStatus
                                                })
                                } else if (name === 'Date') {
                                                let dateStatus = dateHandler(value);
                                                this.setState({
                                                        date: value,
                                                        dateStatus: dateStatus
                                                })
                                }
                }

                confirmedData() {
                                let {valueStatus, typeStatus, dateStatus} = this.state;
                                if (valueStatus === 'correct' & typeStatus === 'correct' & dateStatus === 'correct') {
                                                return true
                                } else return false
                }

                addData(submit){
                                let {value, type, date} = this.state
                                if (submit) {
                                                this.props.onClick(value, type, date)                
                                }                                     
                }

                render() {  
                                let {valueStatus, typeStatus, dateStatus} = this.state;        
                                return (
                                        <div>           
                                                <form className = "form-horizontal">
                                                        <fieldset>
                                                                <legend>Add transaction</legend>
                                                                <Input
                                                                        name="Value"
                                                                        inputStatus = {valueStatus}
                                                                        onChange={this.inputsHandler}/>
                                                                <Input
                                                                        name="Type"
                                                                        inputStatus = {typeStatus}
                                                                        onChange={this.inputsHandler}/>
                                                                <Input
                                                                        name="Date"
                                                                        inputStatus = {dateStatus}
                                                                        onChange={this.inputsHandler}/>
                                                                <AddButton
                                                                        submit = {this.confirmedData()}
                                                                        onClick={this.addData}/>
                                                        </fieldset> 
                                                </form>
                                        </div>
                                )
                }
}

export default AddForm;