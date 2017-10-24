import moment from 'moment';

export const filtersHandler = (transactions, filter) => {
  switch (filter) {
      case 'SHOW_ALL':
            return transactions
      case 'SHOW_INCOME':
            return transactions.filter(transaction => transaction.type === 'income')
      case 'SHOW_CONSUMPTION':
            return transactions.filter(transaction => transaction.type === 'consumption')
      case 'SHOW_LAST_MONTH':
            let dateToCompare = moment().subtract(30, 'days').format('YYYYMMDD');
            return transactions.filter(transaction => moment(transaction.date).format('YYYYMMDD') > dateToCompare)
      case 'SHOW_MORE_THAN_1000_RUBLES':
            return transactions.filter(transaction => transaction.value > 1000)
  }
}