import React, {Component} from 'react';
import './bootstrap.css'
import './App.css';
import {TransactionsTable} from './TransactionsTable';
import {transactionsList} from './transactionsList';
import {Filters} from './Filters';
import moment from 'moment';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = { filters:  {
                  incomeFilter: false,
                  consumptionFilter: false,
                  lastMonthFilter: false,
<<<<<<< HEAD
                  moreThanFilter: false
      }
=======
                  moreThanThousandRubFilter: false
>>>>>>> master
    }
    this.handleFilters = this.handleFilters.bind(this);
  }

<<<<<<< HEAD
  handleFilters(newFilters) {
      this.setState({
          filters: newFilters
=======
  handleFilters(newIncomeFilter, newConsumptionFilter,
     newLastMonthFilter, newMoreThanThousandRubFilter) {
      this.setState({
          incomeFilter: newIncomeFilter,
          consumptionFilter: newConsumptionFilter,
          lastMonthFilter: newLastMonthFilter,
          moreThanThousandRubFilter: newMoreThanThousandRubFilter
>>>>>>> master
      });
  }

  render () {
    const filterTransactions = () => {
        let filteredTransactions =  transactionsList;
<<<<<<< HEAD
        if (this.state.filters) {
            if (this.state.filters.incomeFilter) {
              console.log ('true income');
=======
        if (this.state.incomeFilter || this.state.consumptionFilter || 
          this.state.lastMonthFilter || this.state.moreThanThousandRubFilter) {
            if (this.state.incomeFilter) {
>>>>>>> master
              filteredTransactions = filteredTransactions.filter(transaction =>
                 transaction.type === 'income');
            }
            if (this.state.filters.consumptionFilter) {
              filteredTransactions = filteredTransactions.filter (transaction =>
                 transaction.type === 'consumption');
            }
            if (this.state.filters.lastMonthFilter) {
              const monthAgo = moment().subtract(30, 'days').calendar();
              const formattedMonthAgo = moment(monthAgo).format('YYMMDD');
              filteredTransactions = filteredTransactions.filter(transaction => 
                moment(transaction.date).format('YYMMDD') > formattedMonthAgo);
            }
<<<<<<< HEAD
            if (this.state.filters.moreThanFilter) {
=======
            if (this.state.moreThanThousandRubFilter) {
>>>>>>> master
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
              <button type='button' className="btn btn-default" id="addButton">Добавить транзакцию</button>
              <Filters 
                  onClick={this.handleFilters}
<<<<<<< HEAD
                  filters={this.state.filters}/>
=======
                  incomeFilter={this.state.incomeFilter}
                  consumptionFilter={this.state.consumptionFilter}
                  lastMonthFilter={this.state.lastMonthFilter}
                  moreThanThousandRubFilter={this.state.moreThanThousandRubFilter}/>
>>>>>>> master
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
<<<<<<< HEAD
                  {filterTransactions(this.state.filters)}
=======
                  {filterTransactions(
                      this.state.incomeFilter, 
                      this.state.consumptionFilter, 
                      this.state.lastMonthFilter, 
                      this.state.moreThanThousandRubFilter
                    )
                }
>>>>>>> master
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