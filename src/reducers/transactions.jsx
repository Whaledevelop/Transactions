const transactions = (state = [], action) => {
    let {transaction, type} = action;
    if (type === 'ADD_TRANSACTION') {
        return [
            ...state,
            {
                id: transaction.id,
                value: transaction.value,
                type: transaction.type,
                date: transaction.date
            }
        ]
    } else return state;
}

export default transactions