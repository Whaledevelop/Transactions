import React, {Component} from 'react'
import { connect } from 'react-redux'

import { fetch, switchMode} from '../actions'
import FiltersRow from '../components/filters/FiltersRow';

class FiltersRowContainer extends Component {
  componentWillMount() {
    this.props.onFetchData('filters')
  }

  render() {
    console.log (this.props.filters)
    return (
      <FiltersRow
        size = {this.props.size}
        filters = {this.props.filters}
        fetched = {this.props.fetched}
        onSwitchMode = {this.props.onSwitchMode}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters.data,
    fetched: state.filters.fetched
  }
}

export default connect(
    mapStateToProps,
    {
      onFetchData: fetch,
      onSwitchMode: switchMode
    }
)(FiltersRowContainer);