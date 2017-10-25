export const addTransaction = (transaction) => {
    console.log (transaction);
    return {
        type: 'ADD_TRANSACTION',
        transaction: transaction 
    }
}

export const setVisibilityFilter = filter => {
    return {
      type: 'SET_VISIBILITY_FILTER',
      filter
    }
}