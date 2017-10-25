let nextTransactionId = 0
export const addTransaction = (transaction) => {
    transaction['id'] = nextTransactionId++;    
    return {
        type: 'ADD_TRANSACTION',
        transaction: transaction 
    }
}
/*
export const setVisibilityFilter = filter => {
    return {
      type: 'SET_VISIBILITY_FILTER',
      filter
    }
}*/