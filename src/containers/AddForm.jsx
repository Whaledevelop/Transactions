import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTransaction } from '../actions'

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transaction: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        let {value, name} = e.target;
        this.setState(prevState => ({transaction: {...prevState.transaction, [name] : value}}))
    }

    handleSubmit() {
        this.props.onAddTransaction(this.state.transaction)
    }

    render() {
      return (
          <div>
              <form className="form-horizontal" onSubmit = {this.handleSubmit}>
                    <fieldset>
                            <legend>Add transaction</legend>
                            <div className="form-group col-lg-12">
                                    <input
                                            type="text"
                                            className="form-control" 
                                            name = "value"
                                            onChange = {this.handleChange}/>
                            </div>
                            <div className="form-group col-lg-12">
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
                            <div className="form-group col-lg-12">
                                    <input 
                                            type="datetime-local" 
                                            max="3000-12-30T00:00"
                                            className='form-control'
                                            name = "date"
                                            onChange = {this.handleChange}/>
                            </div>
                            <button className="btn btn-primary" type="submit">
                                    Add Transaction
                            </button>
                    </fieldset>           
              </form>
          </div>
      )
    }   
}

export default connect(
        state => ({}),
        dispatch => ({
                onAddTransaction: (transaction) => {
                        dispatch(addTransaction(transaction))
                }
        })
)(AddForm)