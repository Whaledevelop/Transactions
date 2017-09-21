import React, {Component} from 'react';

export class TransactionsTable extends Component {
	render (){
	    return (   
	       <tr key={this.props.transaction.id}>
		         <td>{this.props.transaction.id}</td>
		         <td>{this.props.transaction.value}</td>
		         <td>{this.props.transaction.type}</td> 
		         <td>
		         	{moment(this.props.transaction.date).format('HH:mm - DD.MM.YYYY')}
		         </td>
		   </tr>
	    )
  	}
}

export default TransactionsTable;