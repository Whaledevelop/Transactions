import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createBrowserHistory from 'history/createBrowserHistory'

import reducer from './reducers'

const middleware = applyMiddleware(thunk, logger)
export const store = createStore(reducer, middleware)
export const history = createBrowserHistory()
