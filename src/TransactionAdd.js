import React from 'react';
import moment from 'moment'

export class TransactionAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       transactionsList: [
              {
                id: 1,
                value: 20000,
                type: 'consumption',
                date: '11:30 12/08/2016'
              },
              {
                id: 2,
                value: 1100,
                type: 'income',
                date: '13:10 06/12/2017'
              },
              {
                id: 3,
                value: 900,
                type: 'consumption',
                date: '12:00 06/24/2017'
              },
              {
                id: 4,
                value: 200,
                type: 'income',
                date: '19:30 06/29/2017'
              },
              {
                id: 5,
                value: 100,
                type: 'consumption',
                date: '18:30 07/07/2017'
              },
              {
                id: 6,
                value: 3200,
                type: 'income',
                date: '18:30 07/21/2017'
              },
              {
                id: 7,
                value: 2100,
                type: 'consumption',
                date: '11:30 07/29/2017'
              },
              {
                id: 8,
                value: 400,
                type: 'income',
                date: '14:30 08/08/2017'
              },
              {
                id: 9,
                value: 1700,
                type: 'consumption',
                date: '16:30 08/20/2017'
              },
              {
                id: 10,
                value: 3000,
                type: 'income',
                date: '21:30 08/28/2017'
              }
            ];
    }
    this.addTransaction = this.addTransaction.bind(this);
  }

addTransaction(e){
    e.preventDefault(); 
    this.setState({
      transactionsList: [...this.state.transactionsList,
      {
        id: this.state.transactionsList.length + 1,
        value: this.newTransactionValue.value,
        type: '', //this.newTransactionType.value,
        date: this.currentTime
      }
    ]
    })

    this.addForm.reset();  
  }

  render() {
    return(
              
<div className="col-md-4 col-lg-4">
    <form ref={input => this.addForm = input} onSubmit={(e) => {this.addTransaction(e)}}>        
      <div className="form-group">
        <div className="input-group">
          <input 
              ref={input => this.newTransactionValue = input}
              type="text" 
              className="form-control"
              placeholder="Pass the value"  />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">Add</button>
          </span>
        </div>
      </div>
    </form>
</div>

      )
  }


}





