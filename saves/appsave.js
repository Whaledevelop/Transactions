/*
import transactionsList from './transactionsList';
import Filters from './Filters';*/

/*  constructor(props) {
    super(props);
    this.state = {
                    incomeFilter: false,
                    consumptionFilter: false,
                    lastMonthFilter: false,
                    moreThanFilter: false
      }
      this.handleFilters = this.handleFilters.bind(this);
  }*/

/*  handleFilters(newIncomeFilter, newConsumptionFilter,
     newLastMonthFilter, newMoreThanFilter) {
      this.setState({
          incomeFilter: newIncomeFilter,
          consumptionFilter: newConsumptionFilter,
          lastMonthFilter: newLastMonthFilter,
          moreThanFilter: newMoreThanFilter
      });
  } */


/* const filterTransactions = () => {
        let filteredTransactions =  transactionsList;
        if (this.state.incomeFilter || this.state.consumptionFilter || 
          this.state.lastMonthFilter || this.state.moreThanFilter) {
            if (this.state.incomeFilter) {
              filteredTransactions = filteredTransactions.filter(transaction =>
                 transaction.type === 'income');
            }
            if (this.state.consumptionFilter) {
              filteredTransactions = filteredTransactions.filter (transaction =>
                 transaction.type === 'consumption');
            }
            if (this.state.lastMonthFilter) {
              const monthAgo = moment().subtract(30, 'days').format('YYMMDD');
              filteredTransactions = filteredTransactions.filter(transaction => 
                moment(transaction.date).format('YYMMDD') > monthAgo);
            }
            if (this.state.moreThanFilter) {
              filteredTransactions = filteredTransactions.filter (transaction => 
                transaction.value > 1000);
            }
        }
        return filteredTransactions.map(transaction => {
                        return <TransactionsTable 
                                  transaction={transaction} 
                                  key={transaction.id}/>
        })
    };*/


/*
</table>                          
<Filters 
    onClick={this.handleFilters}
    incomeFilter={this.state.incomeFilter}
    consumptionFilter={this.state.consumptionFilter}
    lastMonthFilter={this.state.lastMonthFilter}
    moreThanFilter={this.state.moreThanFilter}/>
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
        this.state.incomeFilter, 
        this.state.consumptionFilter, 
        this.state.lastMonthFilter, 
        this.state.moreThanFilter
      )
  }
  </tbody>
</table> 
*/