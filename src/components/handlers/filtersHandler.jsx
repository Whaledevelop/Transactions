import moment from 'moment';

export const filtersHandler = (filters, filteredTransactions) => {
        for (let i = 0; i < filters.length; i++) {
                let { active, filterBy, value, info } = filters[i];
                if (active) {
                        if (filterBy === 'value') {
                                filteredTransactions = filteredTransactions.filter(transaction => {
                                        return (
                                                (info === 'more') ? (transaction.value > value) : (transaction.value < value)
                                        )
                                })
                        }
                        if (filterBy === 'type') {
                                filteredTransactions = filteredTransactions.filter(transaction => transaction.type === value) 
                        }
                        if (filterBy === 'date') {
                                let dateToCompare = moment().subtract(value, info).format('YYYYMMDD');
                                filteredTransactions = filteredTransactions.filter(transaction => {
                                        return (
                                                moment(transaction.date).format('YYYYMMDD') > dateToCompare
                                        )
                                })
                        }                   
                }
        }
        return filteredTransactions;
}

