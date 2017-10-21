import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import AddForm from '../containers/AddForm';

class AddTransaction extends Component {
        render () {     
                return (
                        <div className="container">
                                <div className="row">
                                        <Link to="/">
                                                <button className="btn btn-primary authenticButton">
                                                        Transactions List
                                                </button>
                                        </Link>
                                        <AddForm 
                                                inputes = {[
                                                        {
                                                                name: 'value',
                                                                type: 'numbers',
                                                        },
                                                        {
                                                                name: 'type',
                                                                type: 'select',
                                                                selectValues: ['', 'income', 'consumption'],
                                                        },
                                                        {
                                                                name: 'date',
                                                                type: 'date',
                                                        }
                                                ]}
                                                object = 'transactions'/> 
                                </div>
                        </div>
                )
        }
}

export default AddTransaction;