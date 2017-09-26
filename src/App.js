import React, {Component} from 'react';
import moment from 'moment';

import './css/bootstrap.css'
import './css/App.css';

import TransactionsTable from './components/views/TransactionsTable';
import {transactionsList} from './transactionsList';
import Filters from './components/containers/Filters';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
        filters: {
          income: false,
          consumption: false,
          thisMonth: false,
          moreThan1000: false
        }              
    }
    this.handleFilters = this.handleFilters.bind(this);
  }

  handleFilters(newIncome, newConsumption, newThisMonth, newMoreThan1000) {
      this.setState({
          income: newIncome,
          consumption: newConsumption,
          thisMonth: newThisMonth,
          moreThan1000: newMoreThan1000
      });
  }

  render () {
    const filterTransactions = () => {
        let filteredTransactions =  transactionsList;
        if (this.state.filters.income || this.state.filters.consumption || 
          this.state.filters.thisMonth || this.state.filters.moreThan1000) {
            if (this.state.filters.income) {
              filteredTransactions = filteredTransactions.filter(transaction =>
                 transaction.type === 'income');
            }
            if (this.state.filters.consumption) {
              filteredTransactions = filteredTransactions.filter (transaction =>
                 transaction.type === 'consumption');
            }
            if (this.state.filters.thisMonth) {
              const monthAgo = moment().subtract(30, 'days').format('YYMMDD');
              filteredTransactions = filteredTransactions.filter(transaction => 
                moment(transaction.date).format('YYMMDD') > monthAgo);
            }
            if (this.state.filters.moreThan1000) {
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
                  {filterTransactions()}
                </tbody>
              </table>              
          </div>
      </div>
    );
  }
}

export default App;