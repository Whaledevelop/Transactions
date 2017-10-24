const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      let {id, value, type, date} = action.transaction;
      return [
        ...state,
        {
          id: id,
          value: value,
          type: type,
          date: date
        }
      ]
    default:
      return state
  }
}

export default todos