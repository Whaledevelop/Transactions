import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddForm from '../containers/AddForm';

class AddTransaction extends Component {
                postTransaction(value, type, date) {
                                axios.get('http://localhost:3333/transactions')
                                .then(response => {
                                                let id = (response.data.length + 1);
                                                axios.post('http://localhost:3333/transactions', {
                                                                id: id,
                                                                value: value,
                                                                type: type,
                                                                date: date
                                                })
                                                .then(response => {console.log(response.data)})
                                                .catch(error => {console.log('Error in posting new transaction' + error)})
                                })
                                .catch(error => {console.log('Error in getting json' + error)})
                }

                render () {     
                                return (
                                        <div className="container">
                                                <div className="row">
                                                        <div className="col-lg-12">
                                                                <Link to="/">
                                                                        <button className="btn btn-primary authenticButton">
                                                                                Transactions List
                                                                        </button>
                                                                </Link>
                                                                <AddForm onClick={this.postTransaction.bind(this)}/> 
                                                        </div>
                                                </div>
                                        </div>
                                )
                }
}

export default AddTransaction;