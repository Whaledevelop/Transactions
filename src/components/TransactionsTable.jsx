import React, {Component} from 'react';
import moment from 'moment';

import { firstLetterHandler } from './modules/firstLetterHandler';

class TransactionsTable extends Component {
  headersFromKeys(){
    let transaction = this.props.transactions[0];
    if (transaction === undefined) {
      return []
    } else {
      return Object.keys(transaction)
    }
  }

  render (){
    let {transactions} = this.props;	
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {this.headersFromKeys().map((header,i) => {
              return <th key={"header_"+i}>{firstLetterHandler(header, 'toUpperCase')}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => {
          let {id, value, type, date} = transaction;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{value}</td>
              <td>{type}</td> 
              <td>{moment(date).format('HH:mm - DD.MM.YYYY')}</td>
            </tr>
          )
          })}   								
        </tbody>
      </table>
    )
  }
}

export default TransactionsTable