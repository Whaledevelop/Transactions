import {combineReducers} from 'redux'

import {transactions} from './transactions'
import {filters} from './filters'
import {counterparts} from './counterparts'
import {modals} from './modals'
import {addInputs} from './addInputs'

export default combineReducers({
  addInputs,
  transactions,
  filters,
  counterparts,
  modals  
})