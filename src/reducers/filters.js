const initialState = '';

export default function filters(state = initialState, action) {
  if (action.type === 'FILTER') {
    return action.payload;
  }
  return state;
}
