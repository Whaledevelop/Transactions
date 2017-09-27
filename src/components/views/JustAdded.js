import React, {Component} from 'react';

class JustAdded extends Component {
    render () {
        return (
            <div>
                <h3>Done! You have just added new transaction:</h3>
                <ul>
                    <li>Id : {this.props.transaction.id}</li>
                    <li>Value: {this.props.transaction.value}</li>
                    <li>Type: {this.props.transaction.type}</li>
                    <li>Date: {this.props.transaction.date}</li>
                </ul>
            </div>
        )
    }
}

export default JustAdded;