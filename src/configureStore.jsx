import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'

const middleware = applyMiddleware(thunk, logger)
export const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log("store  changed", store.getState())
})
