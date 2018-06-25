import {combineReducers} from 'redux'

import {transactions} from './transactions'
import {filters} from './filters'
import {counterparts} from './counterparts'
import {modals} from './modals'



export default combineReducers({
  transactions,
  filters,
  counterparts,
  modals
})