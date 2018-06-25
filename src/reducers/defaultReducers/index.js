import { fetchReducers } from "./fetchReducers";
import { addReducer } from "./addReducer";
import { setReducer } from "./setReducer";

export const defaultReducers = (state, action) => {
  const [type, reducer ,typeAddition] = action.type.split('_');
  switch (type) {
    case "FETCH" : {
      return fetchReducers(state, action.payload, typeAddition)
    }
    case "ADD" : {
      return addReducer(state, action.payload)
    }
    case "SET" : {
      return setReducer(state, action.payload, reducer)
    }
    default : return state
  }
}