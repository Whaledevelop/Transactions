let initialState = [{id: 1, value: 2000, type: 'income', date: 'today'}];

const transactions = (state = initialState, action) => {
    let {transaction, type} = action;
    switch (type) {
      case 'ADD_TRANSACTION':
        return [
          ...state,
          {
            id: transaction.id,
            value: transaction.value,
            type: transaction.type,
            date: transactions.date
          }
        ]
      default:
        return state
    }
}

export default transactions