import React, {Component} from 'react';

export class TransactionsTable extends Component {
	render (){
	    return (   
	       <tr key={this.props.transaction.id}>
		         <td>{this.props.transaction.id}</td>
		         <td>{this.props.transaction.value}</td>
		         <td>{this.props.transaction.type}</td> 
		         <td>{this.props.transaction.date}</td>
		   </tr>
	    )
  	}
}

export default TransactionsTable;