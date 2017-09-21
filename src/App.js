import React, {Component} from 'react';
<<<<<<< HEAD
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
=======
import './bootstrap.css'
import './App.css';
import {TransactionsTable} from './TransactionsTable';
import {transactionsList} from './transactionsList';
import {Filters} from './Filters';
import moment from 'moment';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
                  incomeFilter: false,
                  consumptionFilter: false,
                  lastMonthFilter: false,
                  moreThanThousandRubFilter: false
    }
    this.handleFilters = this.handleFilters.bind(this);
  }

  handleFilters(newIncomeFilter, newConsumptionFilter,
     newLastMonthFilter, newMoreThanThousandRubFilter) {
      this.setState({
          incomeFilter: newIncomeFilter,
          consumptionFilter: newConsumptionFilter,
          lastMonthFilter: newLastMonthFilter,
          moreThanThousandRubFilter: newMoreThanThousandRubFilter
      });
  }

  render () {
    const filterTransactions = () => {
        let filteredTransactions =  transactionsList;
        if (this.state.incomeFilter || this.state.consumptionFilter || 
          this.state.lastMonthFilter || this.state.moreThanThousandRubFilter) {
            if (this.state.incomeFilter) {
              filteredTransactions = filteredTransactions.filter(transaction =>
                 transaction.type === 'income');
            }
            if (this.state.consumptionFilter) {
              filteredTransactions = filteredTransactions.filter (transaction =>
                 transaction.type === 'consumption');
            }
            if (this.state.lastMonthFilter) {
              const monthAgo = moment().subtract(30, 'days').calendar();
              const formattedMonthAgo = moment(monthAgo).format('YYMMDD');
              filteredTransactions = filteredTransactions.filter(transaction => 
                moment(transaction.date).format('YYMMDD') > formattedMonthAgo);
            }
            if (this.state.moreThanThousandRubFilter) {
              filteredTransactions = filteredTransactions.filter (transaction => 
                transaction.value > 1000);
            }
        }
        return filteredTransactions.map(transaction => {
                        return <TransactionsTable 
                                  transaction={transaction} 
                                  key={transaction.id}/>
        })
    };

>>>>>>> parent of bdadb88... Another name refact
   return (
      <div className="container">
          <div className="col-md-12 col-lg-12">
<<<<<<< HEAD
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
=======
              <button type='button' className="btn btn-default" id="addButton">Добавить транзакцию</button>
              <Filters 
                  onClick={this.handleFilters}
                  incomeFilter={this.state.incomeFilter}
                  consumptionFilter={this.state.consumptionFilter}
                  lastMonthFilter={this.state.lastMonthFilter}
                  moreThanThousandRubFilter={this.state.moreThanThousandRubFilter}/>
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
                  {filterTransactions(
                      this.state.incomeFilter, 
                      this.state.consumptionFilter, 
                      this.state.lastMonthFilter, 
                      this.state.moreThanThousandRubFilter
                    )
                }
                </tbody>
              </table>              
>>>>>>> parent of bdadb88... Another name refact
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