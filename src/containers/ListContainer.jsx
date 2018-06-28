import React, {Component} from 'react'
import { connect } from 'react-redux'

import {fetch, switchMode} from '../actions'

import List from '../components/list/List'
import FilterableListContainer from './FilterableListContainer';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSwitchMode = this.handleSwitchMode.bind(this)
  }

  componentWillMount() {
    this.props.onFetchData(this.props.listName);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.listData !== this.props.listData) {
      this.props.onFetchData(nextProps.listName);
    }
  }

  handleSwitchMode(name) {
    this.props.onSwitchMode(name, 'modal')
  }

  renderList() {
    if (this.props.filterable) {
      return (
        <FilterableListContainer
          listData = {this.props.listData}
          listName = {this.props.listName}
          onSwitchMode = {this.handleSwitchMode}
        />
      )
    } else {
      return (
        <List 
          listData = {this.props.listData}
          listName = {this.props.listName}
          onSwitchMode = {this.handleSwitchMode}
        />
      )
    }
  }

  renderLoading() {
    return (
      <h4 className = "statusMessageHeader">
        Loading {this.props.listName}
      </h4>
    )
  }

  render() {
    return (
      <div className={this.props.size}>
        {this.props.fetched ? this.renderList() : this.renderLoading()}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const fetched = state[ownProps.listName].fetched;
  const listData = fetched ? state[ownProps.listName].data : []
  return {
    listData: listData,
    fetched: fetched
  }
}

export default connect(
  mapStateToProps,
  {
    onFetchData: fetch,
    onSwitchMode: switchMode
  }
)(ListContainer)
