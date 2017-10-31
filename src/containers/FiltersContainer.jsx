import React, {Component} from 'react'
import { connect } from 'react-redux'
import { turnFilter } from '../actions/filtersActions'
import { fetchAction } from '../actions/fetchAction'
import FilterButton from '../components/FilterButton'

class FiltersContainer extends Component {
  componentWillMount() {
    this.props.onFetchData('filters')
  }

  renderFilters() {
    return (
      <div className="btn-group btn-group-justified">
        {this.props.filters.map(filter=> { 
          return (
            <FilterButton
              key={filter.id}
              color={filter.color}
              id={filter.id}
              name={filter.name}
              onClick={id => this.props.onTurnFilter(id)}/> 
          )        
        })}
      </div>
    )
  }

  render() {
    return (
      <div className={this.props.size}>
        {this.props.filtersFetched ? this.renderFilters() : <div></div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters.filters,
    filtersFetched: state.filters.fetched
  }
}

export default connect(
    mapStateToProps,
    {
      onFetchData: fetchAction,
      onTurnFilter: turnFilter
    }
)(FiltersContainer);