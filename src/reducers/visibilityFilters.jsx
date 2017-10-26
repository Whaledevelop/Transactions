const visibilityFilters = (state = [], action) => {
    let {type, filter} = action;
    if (type === 'SET_VISIBILITY_FILTER') {
            let filters = state;
            let filterIndex = filters.indexOf(filters.find(f => f.name === filter));
            filters[filterIndex].active = !filters[filterIndex].active;
            return filters
    } else return state
}

export default visibilityFilters