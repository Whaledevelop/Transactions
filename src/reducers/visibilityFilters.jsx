const visibilityFilters = (state = [], action) => {
    let {type, filter} = action;
    if (type === 'SET_VISIBILITY_FILTER') {
            let index = state.indexOf(state.find(f => f.name === filter));         
            return Object.assign([], state, state[index].active = !state[index].active )
    } else return state
}

export default visibilityFilters