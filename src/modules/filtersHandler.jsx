import moment from 'moment';

export const filtersHandler = (transactions, filters) => {
  let filteredTransactions = transactions;
  for (let i=0; i<filters.length; i++) {
    let {active, filterBy, value, unit} = filters[i];
    if(active) {
      if (filterBy === 'type') {
        filteredTransactions = filteredTransactions.filter(t => t.type === value)
      }
      if (filterBy === 'date') {
        let dateToCompare = moment().subtract(value, unit).format('YYYYMMDD');
        filteredTransactions = filteredTransactions.filter(t => moment(t.date).format('YYYYMMDD') > dateToCompare)
      }
      if(filterBy === 'value') {
        filteredTransactions =  filteredTransactions.filter(t => t.value > value)
      }
    }
  } 
  return filteredTransactions; 
}