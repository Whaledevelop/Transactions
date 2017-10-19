import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Filters from '../containers/Filters';
import TransactionsTable from '../components/TransactionsTable';
import { filtersHandler } from '../components/handlers/filtersHandler';

class Transactions extends Component {
                constructor(props) {
                                super(props);
                                this.state = {
                                                transactions: [],
                                                filteredTransactions: []
                                };
                                this.filterTransactions = this.filterTransactions.bind(this);
                }

                componentWillMount() {
                                axios.get('http://localhost:3333/transactions')
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
                                filteredTransactions = filtersHandler(filters, filteredTransactions);    
                                this.setState({
                                                filteredTransactions: filteredTransactions
                                })
                }
    
                render() {
                                return (
                                        <div className="container">
                                                <div className="row">
                                                        <div className="col-lg-12">
                                                                <Link to="/add">
                                                                <button className='btn btn-danger authenticButton'>
                                                                        Add transaction
                                                                </button>
                                                                </Link> 
                                                                <Filters onClick={this.filterTransactions}/>        
                                                                <TransactionsTable transactions = {this.state.filteredTransactions}/>
                                                        </div>
                                                </div>        
                                        </div>
                                )
                }
}

export default Transactions;