import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddForm from './AddForm';
import JustAdded from '../presentational/JustAdded';

class AddContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transaction: {
                id: null,
                value: '',
                type: '',
                date: '',
            },
            submittedAdding: false
        }
    }

    handleChanges(id, value, type, date) {
        this.setState({
            transaction: {
                id: id,
                value: value,
                type: type,
                date: date
            },
            submittedAdding: true
        })
    }

    componentDidUpdate() {
        if (this.state.submittedAdding) {
            let {id, value, type, date} = this.state.transaction;
            axios.post('http://localhost:3333/transactions', {
                        id: id,
                        value: value,
                        type: type,
                        date: date
            })
                    .then(response => {
                        console.log (response.data);  
                    })
                    .catch(error => {
                        console.log('Error in posting new transaction' + error);
                    })                           
        }    
    }

    latestAddedTransaction() {
        if (this.state.submittedAdding) {
            return  <JustAdded transaction={this.state.transaction}/>
        }
    }

    render () {     
        return (
            <div className="container">
                <div className="col-lg-12">
                    <Link to="/"><button className="btn btn-primary authenticButton">Transaction List</button></Link>
                    <AddForm onClick={this.handleChanges.bind(this)}/> 
                    <hr/>
                    {this.latestAddedTransaction()}
                </div>
            </div>
        )
    }
}

export default AddContainer;