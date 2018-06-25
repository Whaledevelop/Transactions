export const fetchReducers = (state, payload, typeAddition) => {
  console.log (typeAddition)

  switch (typeAddition) {
    case "PENDING" : {
      return {
        ...state,
        fetching: true
      }
    } 
    case "REJECTED" : {
      return {
        ...state,
        fetching: false,
        error: payload
      } 
    }
    case "FULFILLED" : {
      return {
        ...state, 
        fetching: false, 
        fetched: true,
        data: payload 
      }
    }
    default : return state
  }
}