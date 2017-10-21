import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import AddForm from '../containers/AddForm';

class AddFilter extends Component {
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
                                                                name: 'filterBy',
                                                                type: 'select',
                                                                selectValues: ['', 'value', 'type', 'date']
                                                        },
                                                        {
                                                                name: 'name',
                                                                type: 'description',
                                                        },
                                                        {
                                                                name: 'className',
                                                                type: 'select',
                                                                selectValues: ['', 
                                                                        'btn btn-success', 
                                                                        'btn btn-warning',
                                                                        'btn btn-info',
                                                                        'btn btn-primary',
                                                                        'btn btn-danger'
                                                                ]
                                                        }                                                        
                                                ]}
                                                object = 'filters'/> 
                                </div>
                        </div>
                )
        }
}

export default AddFilter;