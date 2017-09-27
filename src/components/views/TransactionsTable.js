import React, {Component} from 'react';


export class TransactionsTable extends Component {
	render (){
			let { id, value, type, date } = this.props.transaction
	    return (   
	       <tr key={id}>
		         <td>{id}</td>
		         <td>{value}</td>
		         <td>{type}</td> 
		         <td>{date}</td>
		   	</tr>
	    )
  	}
}

export default TransactionsTable;