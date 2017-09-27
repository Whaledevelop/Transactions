import React, {Component} from 'react';
import moment from 'moment';

import TransactionsTable from '../views/TransactionsTable';
import {transactionsList} from '../../transactionsList';

class FilterList extends Component {
  render() {
      const filterTransactions = () => {
            let filters = this.props.filters;
            let filteredTransactions =  transactionsList;
            if (filters) {
                if (filters.income) {
                  filteredTransactions = filteredTransactions.filter(transaction =>
                    transaction.type === 'income');
                }
                if (filters.consumption) {
                  filteredTransactions = filteredTransactions.filter (transaction =>
                    transaction.type === 'consumption');
                }
                if (filters.thisMonth) {
                  let monthAgo = moment().subtract(30, 'days').format('YYMMDD');
                  filteredTransactions = filteredTransactions.filter(transaction => 
                    moment(transaction.date).format('YYMMDD') > monthAgo);
                }
                if (filters.moreThan1000) {
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
        )
  }
}

export default FilterList;

