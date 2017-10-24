let nextTransactionId = 0
export const addTransaction = (transaction) => {
    let {value, type, date} = transaction;
    return {
        type: 'ADD_TRANSACTION',
        transaction: {
            id: nextTransactionId++,
            value: value,
            type: type,
            date: date
        } 
    }
}

export const setVisibilityFilter = filter => {
    return {
      type: 'SET_VISIBILITY_FILTER',
      filter
    }
}