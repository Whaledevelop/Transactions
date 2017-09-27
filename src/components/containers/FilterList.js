import React, {Component} from 'react';
import moment from 'moment';
import axios from 'axios';

import TransactionsTable from '../views/TransactionsTable';

class FilterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
    }

    componentWillReceiveProps(nextProps) {    
        axios.get(`http://localhost:5000/transactions`)
        .then(response => {
            this.setState({
              transactions: response.data,
            });
            let filters = nextProps.filters;
            let transactions = this.state.transactions;
            if (filters) {
                    if (filters.income) {
                        let filteredByIncome = transactions.filter(transaction => transaction.type === 'income');
                        this.setState ({
                            transactions: filteredByIncome
                        })
                    } 
                    if (filters.consumption) {
                        let filteredByConsumption = transactions.filter(transaction => transaction.type === 'consumption');
                        this.setState ({
                            transactions: filteredByConsumption
                        })
                    }
                    if (filters.thisMonth) {
                        let monthAgo = moment().subtract(30, 'days');
                        let filteredByThisMonth = transactions.filter(transaction => 
                            moment(transaction.date) > monthAgo);
                        this.setState ({
                            transactions: filteredByThisMonth
                        })
                    }
                    if (filters.moreThan1000) {
                        let filteredByMoreThan1000 = transactions.filter(transaction => transaction.value > 1000);
                        this.setState ({
                            transactions: filteredByMoreThan1000
                        })
                    }
                }
        })
        .catch(error => {
                console.log('Error in getting json with data ' + error);
        });
    }

    render() {
/*
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
                  let monthAgo = moment().subtract(30, 'days');
                  filteredTransactions = filteredTransactions.filter(transaction => 
                      moment(transaction.date) > monthAgo);                
                }
                if (filters.moreThan1000) {
                  filteredTransactions = filteredTransactions.filter (transaction => 
                      transaction.value > 1000);
                }
            }
*/
        const transactionsList = () => {
            let filteredTransactions = this.state.transactions;
            return filteredTransactions.map(transaction => {
                            return <TransactionsTable 
                                      transaction={transaction} 
                                      key={transaction.id}/>
            })
        }    
                    
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
                  {transactionsList()}
              </tbody>
          </table> 
        )
  }
}

export default FilterList;

