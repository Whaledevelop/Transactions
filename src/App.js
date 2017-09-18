import React, {Component} from 'react';
import './bootstrap.css'
import './App.css';
import {TransactionsTable} from './TransactionsTable';
import {transactionsList} from './transactionsList';
import {Filters} from './Filters';
import moment from 'moment';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
                  incomeFilter: false,
                  consumptionFilter: false,
                  lastMonthFilter: false,
                  moreThanThousandRubFilter: false
    }
    this.handleFilters = this.handleFilters.bind(this);
  }

  handleFilters(newIncomeFilter, newConsumptionFilter, newLastMonthFilter, newMoreThanThousandRubFilter) {
      this.setState({
          incomeFilter: newIncomeFilter,
          consumptionFilter: newConsumptionFilter,
          lastMonthFilter: newLastMonthFilter,
          moreThanThousandRubFilter: newMoreThanThousandRubFilter
      });

  }

  

  render () {
    const filterTransactions = () => {
        let filteredTransactions =  transactionsList;
        if (this.state.incomeFilter || this.state.consumptionFilter || this.state.lastMonthFilter || this.state.moreThanThousandRubFilter) {
            if (this.state.incomeFilter) {
              filteredTransactions = filteredTransactions.filter( t => t.type === 'income');
            }
            if (this.state.consumptionFilter) {
              filteredTransactions = filteredTransactions.filter (t => t.type === 'consumption');
            }
            if (this.state.lastMonthFilter) {
              const monthAgo = moment().subtract(30, 'days').calendar();
              const formattedMonthAgo = moment(monthAgo).format('YYMMDD');
              filteredTransactions = filteredTransactions.filter (t => moment(t.date).format('YYMMDD') > formattedMonthAgo);
            }
            if (this.state.moreThanThousandRubFilter) {
              filteredTransactions = filteredTransactions.filter (t => t.value > 1000);
            }
        }
        return filteredTransactions.map(transaction => {
                        return <TransactionsTable transaction={transaction} key={transaction.id}/>
                      })
    };
  

   return (
      <div className="container-fluid">
          <div className="col-md-12 col-lg-12">
              <button type='button' className="btn btn-default" id="addButton">Добавить транзакцию</button>
              <Filters 
                onClick={this.handleFilters}
                incomeFilter={this.state.incomeFilter}
                consumptionFilter={this.state.consumptionFilter}
                lastMonthFilter={this.state.lastMonthFilter}
                moreThanThousandRubFilter={this.state.moreThanThousandRubFilter}
                />
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
                  {filterTransactions(
                    transactionsList, 
                    this.state.incomeFilter, 
                    this.state.consumptionFilter, 
                    this.state.lastMonthFilter, 
                    this.state.moreThanThousandRubFilter
                    )
                }
                </tbody>
              </table>              
          </div>
      </div>
    );
  }
}

export default App;