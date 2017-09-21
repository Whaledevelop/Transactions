import React, {Component} from 'react';

export class TransactionsTable extends Component {
	render (){
	    return (   
	       <tr key={this.props.transaction.id}>
		         <td>{this.props.transaction.id}</td>
		         <td>{this.props.transaction.value}</td>
		         <td>{this.props.transaction.type}</td> 
<<<<<<< HEAD
		         <td>{this.props.transaction.date}</td>
=======
		         <td>
		         	{moment(this.props.transaction.date).format('HH:mm - DD.MM.YYYY')}
		         </td>
>>>>>>> parent of bdadb88... Another name refact
		   </tr>
	    )
  	}
}

export default TransactionsTable;