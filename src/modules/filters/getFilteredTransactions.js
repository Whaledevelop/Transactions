import moment from 'moment';

export const getFilteredTransactions = (transactions, filters) => {
  let filteredTransactions = transactions;
  for (let i=0; i<filters.length; i++) {
    let {active, filterBy, value, unit} = filters[i];
    if(active) {
      switch (filterBy) {
        case "type" : {
          filteredTransactions = filteredTransactions.filter(transaction => (
            transaction.type === value
          ))
          break;
        }
        case "date" : {
          let dateToCompare = moment().subtract(value, unit).format('YYYYMMDD');
          filteredTransactions = filteredTransactions.filter(transaction => {
            return moment(transaction.date).format('YYYYMMDD') > dateToCompare
          });
          break;
        }
        case "value" : {
          filteredTransactions =  filteredTransactions.filter(t => {
            if (unit === 'more') {
              return (t.value > value)
            } else  if (unit === 'less') {
              return (t.value < value)
            } else {
              return t.value
            }
          })
          break;
        }
        default: return filteredTransactions
      }
    } 
  }
  return filteredTransactions; 
}