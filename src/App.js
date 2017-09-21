import React, {Component} from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './bootstrap.css';
import './App.css';

import TransactionsTable from './TransactionsTable';

class App extends Component {
  addTransaction() {
    let newTransaction = {
        value: this.inputValue.value,
        type: this.inputType.value,
        date: moment(this.inputDate.value).format('HH:mm - DD.MM.YYYY')
    }
    this.props.onAddTransaction(newTransaction, this.props.transactions);
    this.inputValue.value = '';
  }

  render () {
   return (
      <div className="container">
          <div className="col-md-12 col-lg-12">
              <div className="col-lg-4">
                  <div>
                      <Link to="/add">
                          <button type="button" className="btn btn-default" id="addButton">Add transaction</button>
                      </Link>
                  </div>
                  <form className="form-horizontal">
                      <fieldset>
                          <legend>Add transaction</legend>
                          <div className="form-group">
                              <label htmlFor="inputValue" className="col-lg-2 control-label">Value</label>
                              <div className="col-lg-10">
                                  <input type="text" id="inputValue" className="form-control"
                                    ref={(input) => { this.inputValue = input }} />
                              </div>
                          </div>
                          <div className="form-group">
                              <label htmlFor="selectType" className="col-lg-2 control-label">Type</label>
                              <div className="col-lg-10">
                                  <select id="selectType" className="form-control"
                                    ref={input => {this.inputType = input}}>
                                      <option>income</option>
                                      <option>consumption</option>
                                  </select>
                              </div>
                          </div>
                          <div className="form-group">
                              <label htmlFor="inputDate" className="col-lg-2 control-label">Date</label>
                              <div className="col-lg-10">
                                  <input type="datetime-local" id="inputDate" max="2030-12-30T00:00"
                                        ref={(input) => { this.inputDate = input }} />    
                              </div>
                          </div>
                          <div className="form-group">
                              <div className="col-lg-10">               
                                  <button type="submit" className="btn btn-default"
                                      onClick={this.addTransaction.bind(this)}>Add transaction</button>
                              </div>
                          </div>
                      </fieldset> 
                  </form>
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