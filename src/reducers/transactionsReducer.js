const initialTransactions = {
  transactions: [],
  fetching: false,
  fetched: false,
  error: null
}

export const transactions = (state = initialTransactions, action) => {
  switch(action.type) {
    case 'FETCH_TRANSACTIONS_PENDING': {
      return {...state, fetching: true} 
    }
    case 'FETCH_TRANSACTIONS_REJECTED': {
      return {...state, fetching: false, error: action.payload} 
    }
    case 'FETCH_TRANSACTIONS_FULFILLED': {
      return {
        ...state,
        fetching: false, 
        fetched: true,
        transactions: action.payload 
      } 
    }
    case 'ADD_TRANSACTIONS': {
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }
    }
    case 'DELETE_TRANSACTION': {
      return {
        ...state,
        transactions: state.transactions.filter(t=> t.id !== action.payload)
      }
    }
    default: return state
  }
};