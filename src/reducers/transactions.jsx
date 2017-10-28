const transactions = (state = [], action) => {
    let {transaction, type} = action;
    if (type === 'ADD_TRANSACTION') {
        return Object.assign ([], [...state, transaction]);
    } else return state;
}

export default transactions