import React, {Component} from 'react';
import moment from 'moment';

import './bootstrap.css'
import './App.css';

import {TransactionsTable} from './TransactionsTable';
import {transactionsList} from './transactionsList';
import {Filters} from './Filters';


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
              const monthAgo = moment().subtract(30, 'days').calendar();
              const formattedMonthAgo = moment(monthAgo).format('YYMMDD');
              filteredTransactions = filteredTransactions.filter(transaction => 
                moment(transaction.date).format('YYMMDD') > formattedMonthAgo);
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
              <button type='button' className="btn btn-default" id="addButton">
                  Добавить транзакцию
              </button>
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

export default App;