import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import FilterButton from '../components/FilterButton'

const mapStateToProps = (state, ownProps) => {
  return {
      active: ownProps.filter === state.visibilityFilter,
      text: ownProps.text,
      className: ownProps.className
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const Filters = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButton)

export default Filters