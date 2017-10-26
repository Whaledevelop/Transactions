import moment from 'moment';

export const filtersHandler = (transactions, filters) => {
      for (let i=0; i<filters.length; i++) {
            if (filters[i] === 'SHOW_INCOME') {
                  transactions = transactions.filter(transaction => transaction.type === 'income');
            } else if (filters[i] === 'SHOW_CONSUMPTION') {
                  transactions = transactions.filter(transaction => transaction.type === 'consumption')
            } else if (filters[i] === 'SHOW_LAST_MONTH') {
                  let dateToCompare = moment().subtract(30, 'days').format('YYYYMMDD');
                  transactions = transactions.filter(transaction => moment(transaction.date).format('YYYYMMDD') > dateToCompare)
            } else if (filters[i] === 'SHOW_MORE_THAN_1000') {
                  transactions =  transactions.filter(transaction => transaction.value > 1000)
            }
      } 
      return transactions; 
}