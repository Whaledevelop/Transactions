import React, {Component} from 'react';
import moment from 'moment';

class JustAdded extends Component {
    render () {
        const { transaction } = this.props;
        return (
            <div>
                <h3>Done! You have added new transaction:</h3>
                    <ul>
                        <li>Id : {transaction.id}</li>
                        <li>Value: {transaction.value}</li>
                        <li>Type: {transaction.type}</li>
                        <li>Date: {moment(transaction.date).format('HH:mm - DD.MM.YYYY')}</li>                 
                    </ul>
            </div>
        )
    }
}
/*
const JustAdded = (transaction) => {
    return (
        <div>
            <h3>Done! You have added new transaction:</h3>
            <ul>
                <li>Id : {this.props.transaction.id}</li>
                <li>Value: {this.props.transaction.value}</li>
                <li>Type: {this.props.transaction.type}</li>
                <li>Date: {moment(this.props.transaction.date).format('HH:mm - DD.MM.YYYY')}</li>                 
            </ul>
        </div>
    )
}
*/
export default JustAdded;