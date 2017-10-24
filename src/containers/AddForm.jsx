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
              <form onSubmit = {this.handleSubmit}>
                  <input 
                      name = "value"
                      onChange = {this.handleChange}/>
                  <input 
                      name = "type"
                      onChange = {this.handleChange}/>
                  <input 
                      name = "date"
                      onChange = {this.handleChange}/>
                  <button type="submit">
                      Add Transaction
                  </button>
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