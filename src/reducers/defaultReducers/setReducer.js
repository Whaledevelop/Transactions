export const setReducer = (state, payload, reducer) => {
  switch (reducer) {
    case "MODAL" : {
      return state.map(prop => {
        if (prop.name === payload) {
          prop.active = !prop.active;
        } else {
          prop.active = false
        }
        return prop
      })
    }
    case "FILTERS" : {
      let newFilters = Object.assign([], state.data)
      let filterIndex = newFilters.findIndex(f => f.name === payload)
      newFilters[filterIndex].active = !newFilters[filterIndex].active;
      return {
        ...state,
        data: newFilters
      }
    }
    default : return state
  }
  
}