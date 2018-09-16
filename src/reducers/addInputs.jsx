const initialAddInputs = {
  data: {},
  fetching: false,
  fetched: false,
  error: null
}

export const addInputs = (state = initialAddInputs, action) => {
  const {type, payload} = action;
  switch(type) {
    case 'FETCH_ADDINPUTS_PENDING': {
      return {
        ...state, 
        fetching: true
      } 
    }
    case 'FETCH_ADDINPUTS_REJECTED': {
      return {
        ...state, 
        fetching: false, 
        error: payload
      } 
    }
    case 'FETCH_ADDINPUTS_FULFILLED': {
      return {
        ...state,
        fetching: false, 
        fetched: true,
        data: payload 
      } 
    }
    default: return state
  }
}