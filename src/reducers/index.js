import { combineReducers } from 'redux'
import transactions from './transactions'
import visibilityFilter from './visibilityFilter'

const transactionsApp = combineReducers({
    transactions,
    visibilityFilter
})

export default transactionsApp