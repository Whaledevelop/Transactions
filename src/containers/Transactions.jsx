import { connect } from 'react-redux'
import { filtersHandler } from '../components/modules/filtersHandler'
import TransactionsList from '../components/TransactionsList'

const mapStateToProps = (state) => {
    return {
        transactions: filtersHandler(state.transactions, state.visibilityFilter)
    }
}

const Transactions = connect(
    mapStateToProps
)(TransactionsList)

export default Transactions