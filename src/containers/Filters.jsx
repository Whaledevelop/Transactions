import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import FilterButton from '../components/FilterButton'

class Filters extends Component {
        render() {return (
                <div className="btn-group btn-group-justified">
                        {this.props.filters.map(filter=> {
                                return <FilterButton
                                        key={filter.id}
                                        className={filter.className}
                                        name={filter.name}
                                        text={filter.text}
                                        onClick={(name) => {this.props.changeFilter(name)}}/>         
                        })}
                </div>
        )}
}

export default connect(
    state => ({filters: state.visibilityFilters}),
    {changeFilter: setVisibilityFilter}
)(Filters);