import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTransaction } from '../actions'

class AddTransaction extends Component {
    constructor(props) {
        super(props);
        this.state = {input: null};
        this.inputHandler = this.inputHandler.bind(this);
        this.buttonHandler = this.buttonHandler.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.value] : e.target.value})
    }

    handleSubmit() {
        this.props.onAddTransaction(this.state.input)
    }

    render() {
      return (
          <div>
              <form>
                  <input onChange = {this.inputHandler.bind(this)}/>
                  <button onClick={this.buttonHandler.bind(this)}>
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
      onAddTransaction: (value) => {
          dispatch(addTransaction(value))
      }
  })
)(AddTransaction)