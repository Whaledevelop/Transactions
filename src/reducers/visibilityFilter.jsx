const visibilityFilter = (state = [], action) => {
  let {type, filter} = action;
  switch (type) {
    case 'SET_VISIBILITY_FILTER':
        let index = state.indexOf(filter)
        if (index === -1) {
            return [...state, action.filter]
        } else { 
            return state.filter(f => f !== filter)
        }       
    default:
        return state
  }
}

export default visibilityFilter