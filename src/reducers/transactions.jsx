let initialState = [
    {id: 1, value: 20000, type: 'income', date: '2016-06-08T11:30'},
    {id: 2, value: 1100, type: 'consumption', date: '2017-01-12T13:10'},
    {id: 3, value: 900, type: 'income', date: '2017-03-24T12:00'},
    {id: 4, value: 200, type: 'consumption', date: '2017-05-29T19:30'},
    {id: 5, value: 100, type: 'income', date: '2017-07-17T18:30'},
    {id: 6, value: 3200, type: 'consumption', date: '2017-09-09T18:30'},
    {id: 7, value: 2100, type: 'income', date: '2017-09-22T11:30'},
    {id: 8, value: 400, type: 'consumption', date: '2017-10-02T14:30'},
    {id: 9, value: 1700, type: 'income', date: '2017-10-09T16:30'},
    {id: 10, value: 3000, type: 'consumption', date: '2017-10-18T21:30'},
]

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