import React, {Component} from 'react';
import axios from 'axios';

import AddButton from '../components/AddButton';

import { valueHandler } from '../handlers/valueHandler';
import { typeHandler } from '../handlers/typeHandler';
import { dateHandler } from '../handlers/dateHandler';

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
                this.inputHandler = this.inputHandler.bind(this);
        }

        inputHandler(e) {
                let {name, value} = e.target;          
                if (name === 'Value') {
                        let valueStatus = valueHandler(value);
                        this.setState ({
                                value: value,
                                valueStatus: valueStatus
                        })
                } else if (name === 'Type') {
                        let typeStatus = typeHandler(value);
                        this.setState ({
                                type: value,
                                typeStatus: typeStatus
                        })
                } else if (name === 'Date') {
                        let dateStatus = dateHandler(value);
                        this.setState ({
                                date: value,
                                dateStatus: dateStatus
                        })
                }   
        }

        addConfirmedData(submit){
                let {value, type, date} = this.state
                if (submit) {
                        axios.get('http://localhost:3333/transactions')
                        .then(response => {
                                let id = (response.data.length + 1); 
                                this.props.onClick(id, value, type, date);
                        })
                        .catch(error => {console.log('Error in getting json' + error)})
                }                                     
        }

        confirmedData() {
                let {valueStatus, typeStatus, dateStatus} = this.state;
                if (valueStatus === 'correct' & typeStatus === 'correct' & dateStatus === 'correct') {
                        return true
                } else return false
        }
 
        render() {  
                let {valueStatus, typeStatus, dateStatus} = this.state;        
                return (
                        <div>           
                                <form className = "form-horizontal">
                                        <fieldset>
                                                <legend>Add transaction</legend>
                                                <div className="col-lg-12">
                                                        <div className="col-lg-4">
                                                                <div className="form-group">           
                                                                        <label>Value</label>
                                                                        <input 
                                                                                type="text"
                                                                                className="form-control"
                                                                                onChange={this.inputHandler}
                                                                                name = 'Value'/>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                                <h4 className="inputHandler">{valueStatus}</h4>
                                                        </div>
                                                </div>
                                                <div className="col-lg-12">
                                                        <div className="col-lg-4">
                                                                <div className="form-group">           
                                                                        <label>Type</label>
                                                                        <select 
                                                                                id="selectType" 
                                                                                className="form-control"
                                                                                onChange={this.inputHandler}
                                                                                name = 'Type'>
                                                                                <option></option>
                                                                                <option>income</option>
                                                                                <option>consumption</option>
                                                                        </select>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                                <h4 className="inputHandler">{typeStatus}</h4>
                                                        </div>
                                                </div>
                                                <div className="col-lg-12">
                                                        <div className="col-lg-4">
                                                                <div className="form-group">           
                                                                        <label>Date</label>
                                                                        <input 
                                                                                type="datetime-local" 
                                                                                max="3000-12-30T00:00"
                                                                                className='form-control'
                                                                                onChange={this.inputHandler}
                                                                                name = 'Date'/>  
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                                <h4 className="inputHandler">{dateStatus}</h4>
                                                        </div>
                                                </div>
                                                <AddButton
                                                        submit = {this.confirmedData()}
                                                        onClick={this.addConfirmedData.bind(this)}/>
                                        </fieldset> 
                                </form>
                        </div>
                )
        }
}

export default AddForm;