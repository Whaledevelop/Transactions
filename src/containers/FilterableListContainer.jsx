import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../actions'

import List from '../components/list/List';
import {getFilteredTransactions} from '../modules/filters/getFilteredTransactions'

class FilterableListContainer extends Component {
  componentWillMount() {
    this.props.onFetchData('filters')
  }

  render() { 
    return (  
      <List 
        listData = {this.props.filteredListData}
        listName = {this.props.listName}
        onSwitchMode = {this.props.onSwitchMode}
      />
    )
  }
}
 
const mapStateToProps = (state, ownProps) => {
  const filtersFetched = state.filters.fetched;
  const filteredListData = (filtersFetched && ownProps.listName ==="transactions")
    ? getFilteredTransactions(ownProps.listData, state.filters.data)
    : ownProps.listData
  return {
    filteredListData: filteredListData
  }
}

export default connect(
  mapStateToProps,
  {onFetchData: fetch}
)(FilterableListContainer)