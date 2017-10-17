import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddContainer from '../containers/AddContainer';

class AddTransaction extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        transaction: {
                                id: '',
                                value: '',
                                type: '',
                                date: ''
                        },
                        justAdded: false
                }
        }
        postTransaction(id, value, type, date) {
                        console.log (id, value, type, date);
                        axios.post('http://localhost:3333/transactions', {
                                id: id,
                                value: value,
                                type: type,
                                date: date
                        })
                        .then(response => {console.log(response.data);
                        })
                        .catch(error => {console.log('Error in posting new transaction' + error)})               
        }

        render () {     
                return (
                        <div className="container">
                                <div className="row">
                                        <div className="col-lg-12">
                                                <Link to="/">
                                                        <button className="btn btn-primary authenticButton">
                                                                Transaction List
                                                        </button>
                                                </Link>
                                                <AddContainer onClick={this.postTransaction.bind(this)}/> 
                                        </div>
                                </div>
                        </div>
                )
        }
}

export default AddTransaction;