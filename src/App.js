import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';


import './bootstrap.css'
import './App.css';

import TransactionsTable from './TransactionsTable';

class App extends Component {
  addTransaction() {
    console.log (this.inputDate.value)
    let newTransaction = {
      value: this.inputValue.value,
      type: this.inputType.value,
      date: moment(this.inputDate.value).format('HH:mm - DD.MM.YYYY')
    }
    this.props.onAddTransaction(newTransaction, this.props.transactions);
    this.inputValue.value = '';
    this.inputDate.value = '';
  }

  render () {
   return (
      <div className="container">
          <div className="col-lg-12">
              <div className="col-lg-3">
                  <div>
                      <Link to="/add">
                          <button type="button" className="btn btn-default" id="addButton">Add transaction</button>
                      </Link>
                  </div>
                  <form className="form-horizontal">
                      <fieldset>
                          <legend>Add transaction</legend>
                              <div className="form-group">
                                  <label className="control-label" htmlFor="inputValue" >Value</label>
                                  <input className="form-control" type="text"  
                                      ref={(input) => { this.inputValue = input }}/>
                              </div>
                              <div className="form-group">
                                  <label className="control-label" htmlFor="inputDate">Date</label>
                                  <input id="inputDate" className="form-control" type="datetime-local" max="2030-12-31T00:00" ref={(input) => { this.inputDate = input }}/>
                              </div>
                              <div className="form-group">
                                  <label className="control-label" htmlFor="inputType">Type</label>
                                      <select id="inputType" className="form-control"
                                          ref={(input) => { this.inputType = input }}>
                                          <option>income</option>
                                          <option>consumption</option>
                                      </select>
                              </div>
                              <div className="form-group">
                                  <button type="submit" className="btn btn-default"
                                      onClick={this.addTransaction.bind(this)}>Add transaction</button>
                              </div>
                      </fieldset>
                  </form>
                  <div>
                        
                        
                  </div>
                  <div>
                      <button>Income Filter</button>
                      <button>Consumption Filter</button>
                  </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                      <tr>
                          <th>id</th>
                          <th>Value</th>
                          <th>Type</th>
                          <th>Date</th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.props.transactions.map((transaction, index) =>
                        <TransactionsTable 
                                          transaction={transaction} 
                                          key={transaction.id}/>
                          )}
                  </tbody>
              </table>                          
          </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    transactions: state.transactions
  }),
  dispatch => ({
    onAddTransaction: (newTransaction, transactions) => {
      const payload = {
        id: (transactions.length + 1),
        value: newTransaction.value,
        type: newTransaction.type,
        date: newTransaction.date
      };
      dispatch({ type: 'ADD_TRANSACTION', payload });
    }
  })
)(App);