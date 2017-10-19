import React, {Component} from 'react';
import moment from 'moment';

class TransactionsTable extends Component {
		render (){
				const { transactions } = this.props;
				return (
						<table className="table table-striped table-hover">
								<thead>
										<tr>
												<th>id</th>
												<th>Value</th>
												<th>Type</th>
												<th>Date</th>
										</tr>
								</thead>
								<tbody>
										{transactions.map(transaction => {
												return (
														<tr key={transaction.id}>
																<td>{transaction.id}</td>
																<td>{transaction.value}</td>
																<td>{transaction.type}</td> 
																<td>{moment(transaction.date).format('HH:mm - DD.MM.YYYY')}</td>
														</tr>
												)
										})}   								
								</tbody>
						</table>
				)
		}
}

export default TransactionsTable;