import moment from 'moment';

export const filtersHandler = (filters, filteredTransactions) => {
        for (let i = 0; i < filters.length; i++) {
                let { active, filterBy} = filters[i];
                if (active === true) {
                        if (filterBy === 'value') {
                                let {value, moreOrLess} = filters[i];
                                filteredTransactions = filteredTransactions.filter(transaction => {
                                        if (moreOrLess === 'more') {
                                                return transaction.value > value
                                        } else return transaction.value < value
                                })
                        }
                        if (filterBy === 'type') {
                                let {type} = filters[i];
                                filteredTransactions = filteredTransactions.filter(transaction => transaction.type === type) 
                        }
                        if (filterBy === 'date') {
                                let {past, unit} = filters[i];
                                if (unit === 'week' || unit === 'weeks') {
                                        past = past*7;
                                        unit = 'days';
                                }
                                let dateToCompare = moment().subtract(past, unit).format('YYYYMMDD');
                                filteredTransactions = filteredTransactions.filter(transaction => {
                                        return (
                                                moment(transaction.date).format('YYYYMMDD') > dateToCompare
                                        )
                                })
                        }                   
                }
        }
        return filteredTransactions
}

