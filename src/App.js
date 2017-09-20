import React, {Component} from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './bootstrap.css';
import './App.css';

import TransactionsTable from './TransactionsTable';
import transactionsList from './transactionsList';
import Filters from './Filters';


class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
                  incomeFilter: false,
                  consumptionFilter: false,
                  lastMonthFilter: false,
                  moreThanFilter: false
    }
    this.handleFilters = this.handleFilters.bind(this);
  }

  handleFilters(newIncomeFilter, newConsumptionFilter,
     newLastMonthFilter, newMoreThanFilter) {
      this.setState({
          incomeFilter: newIncomeFilter,
          consumptionFilter: newConsumptionFilter,
          lastMonthFilter: newLastMonthFilter,
          moreThanFilter: newMoreThanFilter
      });
  }

  addTransaction() {
    this.props.onAddTransaction(this.transactionInput.value);
    this.transactionInput.value = '';
  }

  render () {
    const filterTransactions = () => {
        let filteredTransactions =  transactionsList;
        if (this.state.incomeFilter || this.state.consumptionFilter || 
          this.state.lastMonthFilter || this.state.moreThanFilter) {
            if (this.state.incomeFilter) {
              filteredTransactions = filteredTransactions.filter(transaction =>
                 transaction.type === 'income');
            }
            if (this.state.consumptionFilter) {
              filteredTransactions = filteredTransactions.filter (transaction =>
                 transaction.type === 'consumption');
            }
            if (this.state.lastMonthFilter) {
              const monthAgo = moment().subtract(30, 'days').format('YYMMDD');
              filteredTransactions = filteredTransactions.filter(transaction => 
                moment(transaction.date).format('YYMMDD') > monthAgo);
            }
            if (this.state.moreThanFilter) {
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
              <table className="table table-striped table-hover">
                {this.props.transactions.map((transaction, index) =>
                  <TransactionsTable 
                                    transaction={transaction} 
                                    key={transaction.id}/>
                    )}
              </table>            
              <Filters 
                  onClick={this.handleFilters}
                  incomeFilter={this.state.incomeFilter}
                  consumptionFilter={this.state.consumptionFilter}
                  lastMonthFilter={this.state.lastMonthFilter}
                  moreThanFilter={this.state.moreThanFilter}/>
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
                      this.state.moreThanFilter
                    )
                }
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
    onAddTransaction: (value) => {
      const payload = {
        id: (transactionsList.length + 1),
        value: value,
        type: 'income',
        date: moment().format('HH:mm - DD.MM.YYYY')
      };
      dispatch({ type: 'ADD_TRANSACTION', payload });
    }
  })
)(App);