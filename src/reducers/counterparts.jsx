// import {defaultReducers} from './defaultReducers/index.js'

const initialCounterparts = {
  data: [],
  fetching: false,
  fetched: false,
  error: null
}

export const counterparts = (state = initialCounterparts, action) => {
  switch(action.type) {
    case 'FETCH_COUNTERPARTS_PENDING': {
      return {...state, 
        fetching: true
      } 
    }
    case 'FETCH_COUNTERPARTS_REJECTED': {
      return {...state, 
        fetching: false, 
        error: action.payload
      } 
    }
    case 'FETCH_COUNTERPARTS_FULFILLED': {
      return {...state,
        fetching: false, 
        fetched: true,
        data: action.payload 
      } 
    }
    case 'ADD_COUNTERPARTS': {
      return {...state,
        data: [...state.counterparts, action.payload]
      }
    }
    default: return state
  }
}