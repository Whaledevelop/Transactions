import React, {Component} from 'react'
import { connect } from 'react-redux'

import { addTransaction } from '../actions'
import AddButton from '../components/AddButton'
import { inputHandler } from '../components/modules/inputHandler'

class AddForm extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        transaction: {},
                        info: []
                };
                this.handleChange = this.handleChange.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this)
        }

        handleChange(e) {
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
                        let newTransaction = this.state.transaction;
                        newTransaction['id'] = this.props.id;
                        this.props.onAddTransaction(newTransaction);
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
                <form className="form-horizontal" onSubmit = {this.handleSubmit}>
                        <fieldset>
                                <legend>Add transaction</legend>
                                <div className="form-group col-lg-12">
                                                <div className="col-lg-4">
                                                                <input
                                                                        type="number"
                                                                        className="form-control" 
                                                                        name = "value"
                                                                        onChange = {this.handleChange}/>
                                                </div>
                                                <div className="col-lg-6">
                                                        <h4>{info.value}</h4>
                                                </div>
                                </div>
                                <div className="form-group col-lg-12">
                                                <div className="col-lg-4">
                                                                <select
                                                                        id="selectType"
                                                                        className='form-control'
                                                                        name = "type"
                                                                        onChange = {this.handleChange}>
                                                                        <option></option>
                                                                        <option>income</option>
                                                                        <option>consumption</option> 
                                                                </select>
                                                </div>
                                                <div className="col-lg-6">
                                                        <h4>{info.type}</h4>
                                                </div>               
                                </div>
                                <div className="form-group col-lg-12">
                                                <div className="col-lg-4">
                                                                <input 
                                                                        type="datetime-local" 
                                                                        max="3000-12-30T00:00"
                                                                        className='form-control'
                                                                        name = "date"
                                                                        onChange = {this.handleChange}/>
                                                </div>
                                                <div className="col-lg-6">
                                                        <h4>{info.date}</h4>
                                                </div> 
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

export default connect(
        state => ({id: (state.transactions.length + 1)}),
        {onAddTransaction: addTransaction}
)(AddForm);