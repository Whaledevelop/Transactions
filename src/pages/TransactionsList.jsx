import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import FiltersContainer from '../containers/FiltersContainer';
import TransactionsTable from '../components/TransactionsTable';

class TransactionsList extends Component {
  constructor(props) {
  super(props);
  this.state = {
        transactions: [],
        filteredTransactions: []
    };
    this.filterTransactions = this.filterTransactions.bind(this);
  }

    componentWillMount() {
            axios.get(`http://localhost:3333/transactions`)
                .then(response => {
                    this.setState({
                        transactions: response.data,
                        filteredTransactions: response.data
                    })
                })
                .catch(error => {
                    console.log('Error in getting json with data ' + error);
                });
    }

    filterTransactions( filters ) {
        let filteredTransactions = this.state.transactions;
        for (let i = 0; i < filters.length; i++) {
            let { filterOn, filterBy, filterValue, filterInfo } = filters[i];
            if (filterOn) {
                if (filterBy === 'type') {
                    filteredTransactions = filteredTransactions.filter(transaction => transaction.type === filterValue);
                }
                if (filterBy === 'date') {
                    let dateToCompare = moment().subtract(filterValue, filterInfo).format('YYYYMMDD');
                    filteredTransactions = filteredTransactions.filter(transaction => {
                         return (
                             moment(transaction.date).format('YYYYMMDD') > dateToCompare
                         )
                    })
                }
                if (filterBy === 'value') {
                    filteredTransactions = filteredTransactions.filter(transaction => {
                        return (
                            (filterInfo === 'more') ? (transaction.value > filterValue) : (transaction.value < filterValue)
                        )
                    })
                }                
            }
        }
        this.setState({
            filteredTransactions: filteredTransactions
        })
    }
    
    render () {
      return (
          <div className="container">
                <div className="row">
                        <div className="col-lg-12">
                                <Link to="/add">
                                    <button className='btn btn-danger authenticButton'>Add new transaction</button>
                                </Link>
                                <FiltersContainer onClick={this.filterTransactions}/>        
                                <TransactionsTable transactions = {this.state.filteredTransactions}/>
                        </div>
                </div>        
          </div>
        );
  }
}

export default TransactionsList;