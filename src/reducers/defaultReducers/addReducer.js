export const addReducer = (state, payload) => {
  return {
    ...state,
    data: [...state.data, payload]
  }
}