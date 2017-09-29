import React, {Component} from 'react';
import moment from 'moment';
import axios from 'axios';

import TransactionsList from '../views/TransactionsList';

class FilterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: [],
            loading: true,
            error: null
        }
    }

    componentWillMount() {
        axios.get(`http://localhost:3333/transactions`)
            .then(response => {
                this.setState({
                    transactions: response.data,
                    loading: false,
                    error: null
                })
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    error: error
                  })
            })
    }

    componentWillReceiveProps(nextProps) {  
        axios.get(`http://localhost:3333/transactions`)
            .then(response => {
                let filters = nextProps.filters;
                this.setState({
                    transactions: response.data
                });
                let filteredTransactions = this.state.transactions;
                if (filters) {
                        if (filters.income) {
                            filteredTransactions = filteredTransactions.filter(transaction => transaction.type === 'income');
                        } 
                        if (filters.consumption) {
                            filteredTransactions = filteredTransactions.filter(transaction => transaction.type === 'consumption');
                        }
                        if (filters.thisMonth) {
                            let monthAgo = moment().subtract(30, 'days').format('YYYYMMDD');
                            filteredTransactions = filteredTransactions.filter(transaction => {
                                let date = moment(transaction.date).format('YYYYMMDD');                         
                                return date > monthAgo
                            });
                        }
                        if (filters.moreThan1000) {
                            filteredTransactions = filteredTransactions.filter(transaction => transaction.value > 1000);
                        }
                    }
                    this.setState({
                        transactions: filteredTransactions
                    })
            })
            .catch(error => {
                    console.log('Error in getting json with data ' + error);
            });
    }

    renderLoading() {
        return <div className="loadingStatus">Loading...</div>;
      }
    
    renderError() {
        return <div>Something went wrong: {this.state.error.message}</div>;
    }

    renderData() {
        if(this.state.error) {
            return this.renderError()
        } else {
            return <TransactionsList transactions={this.state.transactions}/>
        }      
    }

    render() {
        return (
            this.state.loading ? this.renderLoading() : this.renderData()
        )  
    }
}

export default FilterList;

