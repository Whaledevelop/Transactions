import { connect } from 'react-redux'
import { filtersHandler } from '../components/modules/filtersHandler'
import TransactionsList from '../components/TransactionsList'

const Transactions = connect(
        state => ({ transactions: filtersHandler(state.transactions, state.visibilityFilters) }),
)(TransactionsList)

export default Transactions