import {combineReducers} from 'redux'

import {transactions} from './transactionsReducer'
import {filters} from './filtersReducer'
import {counterparts} from './counterpartsReducer'

export default combineReducers({
  transactions,
  filters,
  counterparts
})
