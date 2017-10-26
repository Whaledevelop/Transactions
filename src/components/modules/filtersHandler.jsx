import moment from 'moment';

export const filtersHandler = (transactions, filters) => {
      console.log (filters);
      for (let i=0; i<filters.length; i++) {
            if (filters[i] === 'income') {
                  transactions = transactions.filter(transaction => transaction.type === 'income');
            } else if (filters[i] === 'consumption') {
                  transactions = transactions.filter(transaction => transaction.type === 'consumption')
            } else if (filters[i] === 'lastMonth') {
                  let dateToCompare = moment().subtract(30, 'days').format('YYYYMMDD');
                  transactions = transactions.filter(transaction => moment(transaction.date).format('YYYYMMDD') > dateToCompare)
            } else if (filters[i] === 'moreThan1000') {
                  transactions =  transactions.filter(transaction => transaction.value > 1000)
            }
      } 
      return transactions; 
}