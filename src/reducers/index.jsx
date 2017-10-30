import {combineReducers} from 'redux'

import {transactions} from './transactionsReducer'
import {filters} from './filtersReducer'
import {counterparts} from './counterpartsReducer'
import {modals} from './modalsReducer'

export default combineReducers({
  transactions,
  filters,
  counterparts,
  modals
})