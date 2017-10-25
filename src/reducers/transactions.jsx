const transactions = (state = [], action) => {
    let {transaction, type} = action;
    if (type === 'ADD_TRANSACTION') {
        console.log (transaction);
        return [
            ...state,
            {
                id: transaction.id,
                value: transaction.value,
                type: transaction.type,
                date: transactions.date
            }
        ]
    } else return state;
}

export default transactions