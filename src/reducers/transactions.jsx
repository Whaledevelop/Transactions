const transactions = (state = [], action) => {
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