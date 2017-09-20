const initialState = "";

export default function filters (state = initialState, action) {
  if (action.type === 'FILTER') {
    return action.payload;
    /* 
    if (state.includes(action.payload)) {
      let indexFilter = state.indexOf(action.payload);    
      state.splice(indexFilter, indexFilter + 1);
      return state;
    } else  {const newState =  [
        ...state,
        action.payload
      ]
      return newState;   
    }*/
  }
  return state;
}
