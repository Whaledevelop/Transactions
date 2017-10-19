import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddForm from '../containers/AddForm';

class AddFilter extends Component {
                postFilters(name, text, className, filterBy, value, info) {
                        axios.get('http://localhost:3333/filters')
                        .then(response => {
                                        let id = (response.data.length + 1);
                                        let active = false;
                                        axios.post('http://localhost:3333/filters', {
                                                        id: id,
                                                        name: name,
                                                        text: text,
                                                        className: className,
                                                        filterBy: filterBy,
                                                        value: value,
                                                        info: info,
                                                        active: active
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
                                            <Link to="/">
                                                    <button className="btn btn-primary authenticButton">
                                                            Transactions List
                                                    </button>
                                            </Link>
                                            <AddForm onClick={this.postFilters.bind(this)}/> 
                                        </div>
                                </div>
                        )
                }
}

export default AddFilter;