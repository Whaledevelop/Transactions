// import { defaultReducers } from "./defaultReducers/index.js";

const initialFilters = {
  data: [],
  fetching: false,
  fetched: false,
  error: null
}

export const filters = (state = initialFilters, action) => {
  const {type, payload} = action;
  switch(type) {
    case 'FETCH_FILTERS_PENDING': {
      return {...state, 
        fetching: true
      } 
    }
    case 'FETCH_FILTERS_REJECTED': {
      return {...state, 
        fetching: false, 
        error: payload
      } 
    }
    case 'FETCH_FILTERS_FULFILLED': {
      return {
        ...state,
        fetching: false, 
        fetched: true,
        data: payload 
      } 
    }
    case 'ADD_FILTERS': {
      return {
        ...state,
        data: [...state.data, payload]
      }
    }
    case 'SET_FILTER_MODE': {
      let newFilters = Object.assign([], state.data)
      let filterIndex = newFilters.findIndex(f => f.name === payload)
      newFilters[filterIndex].active = !newFilters[filterIndex].active;
      return {
        ...state,
        filters: newFilters
      }
    }
    default: return state
  }
}