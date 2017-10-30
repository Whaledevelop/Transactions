const initialFilters = {
  filters: [],
  fetching: false,
  fetched: false,
  error: null
}

export const filters = (state = initialFilters, action) => {
  let {type, payload} = action;
  switch(type) {
    case 'FETCH_FILTERS_PENDING': {
      return {
        ...state, 
        fetching: true} 
    }
    case 'FETCH_FILTERS_REJECTED': {
      return {
        ...state, 
        fetching: false, 
        error: payload} 
    }
    case 'FETCH_FILTERS_FULFILLED': {
      for (let i=0; i<payload.length; i++) {payload[i]['active'] = false}
      return {
        ...state,
        fetching: false, 
        fetched: true,
        filters: payload 
      } 
    }
    case 'ADD_FILTERS': {
      return {
        ...state,
        filters: [...state.filters, payload]
      }
    }
    case 'SET_FILTER_MODE': {
      let newFilters = Object.assign([], state.filters)
      let filterIndex = newFilters.findIndex(f => f.id === payload)
      newFilters[filterIndex].active = !newFilters[filterIndex].active;
      return {
        ...state,
        filters: newFilters
      }
    }
    case 'DELETE_FILTER': {
      return {
        ...state,
        filters: state.filters.filter(t=> t.id !== payload)
      }
    }
    default: return state
  }
};