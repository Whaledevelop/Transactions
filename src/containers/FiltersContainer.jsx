import React, {Component} from 'react'
import { connect } from 'react-redux'

import { fetch, setMode} from '../actions'

import FilterButton from '../components/app/FilterButton'

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
              name={filter.name}
              onClick={name => this.props.onTurnFilter(name, 'filter')}/> 
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
      onFetchData: fetch,
      onTurnFilter: setMode
    }
)(FiltersContainer);