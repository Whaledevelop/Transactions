import { combineReducers } from 'redux'
import transactions from './transactions'
import visibilityFilters from './visibilityFilters'

const transactionsApp = combineReducers({
    transactions,
    visibilityFilters
})

export default transactionsApp