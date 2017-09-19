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
  this.state = { filters:  {
                  incomeFilter: false,
                  consumptionFilter: false,
                  lastMonthFilter: false,
                  moreThanFilter: false
      }
    }
    this.handleFilters = this.handleFilters.bind(this);
  }

  handleFilters(newFilters) {
      this.setState({
          filters: newFilters
      });
  }

  render () {
    const filterTransactions = () => {
        let filteredTransactions =  transactionsList;
        if (this.state.filters) {
            if (this.state.filters.incomeFilter) {
              console.log ('true income');
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
            if (this.state.filters.moreThanFilter) {
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
      <div className="container-fluid">
          <div className="col-md-12 col-lg-12">
              <button type='button' className="btn btn-default" id="addButton">
                  Добавить транзакцию
              </button>
              <Filters 
                  onClick={this.handleFilters}
                  filters={this.state.filters}/>
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
                  {filterTransactions(this.state.filters)}
                </tbody>
              </table>              
          </div>
      </div>
    );
  }
}

export default App;