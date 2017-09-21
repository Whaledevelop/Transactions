import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';


import './bootstrap.css'
import './App.css';

import TransactionsTable from './TransactionsTable';

class App extends Component {
  addTransaction() {
    this.props.onAddTransaction(this.transactionInput.value, this.props.transactions);
    this.transactionInput.value = '';
  }

  render () {
   return (
      <div className="container">
          <div className="col-md-12 col-lg-12">
              <div>
                  <Link to="/add">
                      <button type="button" className="btn btn-default" id="addButton">Add transaction</button>
                  </Link>
              </div>
              <div>
                    <input type="text" ref={(input) => { this.transactionInput = input }} />
                    <button onClick={this.addTransaction.bind(this)}>Add transaction</button>
              </div>
              <div>
                  <button>Income Filter</button>
                  <button>Consumption Filter</button>
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
    onAddTransaction: (value, transactions) => {
      const payload = {
        id: 11,//(transactions.length + 1),
        value: value,
        type: 'income',
        date: moment().format('HH:mm - DD.MM.YYYY')
      };
      dispatch({ type: 'ADD_TRANSACTION', payload });
    }
  })
)(App);