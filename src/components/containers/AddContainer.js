import React, {Component} from 'react';
import axios from 'axios';

import AddForm from './AddForm';
import JustAdded from '../views/JustAdded';

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

    handleChanges(newId, newValue, newType, newDate) {
        this.setState({
            transaction: {
                id: newId,
                value: newValue,
                type: newType,
                date: newDate
            },
            submittedAdding: true
        })
    }

    componentDidUpdate() {
        if (this.state.submittedAdding) {
            let {id, value, type, date} = this.state.transaction;
            axios.post('http://localhost:5000/transactions', {
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
    
    render () {
        const latestAddedTransaction = () => {
            return this.state.submittedAdding ? <JustAdded transaction={this.state.transaction}/> :
            <h3>No transactions added</h3>
        }
        return (
            <div>
                <AddForm onChange={this.handleChanges.bind(this)}/> 
                {latestAddedTransaction()}
            </div>
        )
    }
}

export default AddContainer;