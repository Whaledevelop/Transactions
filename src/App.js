import React, {Component} from 'react';
import './bootstrap.css'
import './App.css';
<<<<<<< HEAD
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
=======

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
>>>>>>> parent of fcc0987... Added add form
      this.setState({
          incomeFilter: newIncomeFilter,
          consumptionFilter: newConsumptionFilter,
          lastMonthFilter: newLastMonthFilter,
<<<<<<< HEAD
          moreThanThousandRubFilter: newMoreThanThousandRubFilter
      });
=======
          moreThanFilter: newMoreThanFilter
      });
  }

  addTransaction() {
    this.props.onAddTransaction(this.transactionInput.value, this.props.transactions);
    this.transactionInput.value = '';
>>>>>>> parent of fcc0987... Added add form
  }

  render () {
    const filterTransactions = () => {
        let filteredTransactions =  transactionsList;
        if (this.state.incomeFilter || this.state.consumptionFilter || 
<<<<<<< HEAD
          this.state.lastMonthFilter || this.state.moreThanThousandRubFilter) {
=======
          this.state.lastMonthFilter || this.state.moreThanFilter) {
>>>>>>> parent of fcc0987... Added add form
            if (this.state.incomeFilter) {
              filteredTransactions = filteredTransactions.filter(transaction =>
                 transaction.type === 'income');
            }
            if (this.state.consumptionFilter) {
              filteredTransactions = filteredTransactions.filter (transaction =>
                 transaction.type === 'consumption');
            }
            if (this.state.lastMonthFilter) {
<<<<<<< HEAD
              const monthAgo = moment().subtract(30, 'days').calendar();
              const formattedMonthAgo = moment(monthAgo).format('YYMMDD');
              filteredTransactions = filteredTransactions.filter(transaction => 
                moment(transaction.date).format('YYMMDD') > formattedMonthAgo);
            }
            if (this.state.moreThanThousandRubFilter) {
=======
              const monthAgo = moment().subtract(30, 'days').format('YYMMDD');
              filteredTransactions = filteredTransactions.filter(transaction => 
                moment(transaction.date).format('YYMMDD') > monthAgo);
            }
            if (this.state.moreThanFilter) {
>>>>>>> parent of fcc0987... Added add form
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
<<<<<<< HEAD
              <button type='button' className="btn btn-default" id="addButton">Добавить транзакцию</button>
              <Filters 
                  onClick={this.handleFilters}
                  incomeFilter={this.state.incomeFilter}
                  consumptionFilter={this.state.consumptionFilter}
                  lastMonthFilter={this.state.lastMonthFilter}
                  moreThanThousandRubFilter={this.state.moreThanThousandRubFilter}/>
              <table className="table table-striped table-hover">
                <thead>
=======
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
              <Filters 
                  onClick={this.handleFilters}
                  incomeFilter={this.state.incomeFilter}
                  consumptionFilter={this.state.consumptionFilter}
                  lastMonthFilter={this.state.lastMonthFilter}
                  moreThanFilter={this.state.moreThanFilter}/>
              <table className="table table-striped table-hover">
                <thead>
>>>>>>> parent of fcc0987... Added add form
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
<<<<<<< HEAD
                      this.state.moreThanThousandRubFilter
                    )
                }
                </tbody>
              </table>              
=======
                      this.state.moreThanFilter
                    )
                }
                </tbody>
              </table>            
>>>>>>> parent of fcc0987... Added add form
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