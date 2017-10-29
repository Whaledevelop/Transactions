import React, {Component} from 'react'
import { connect } from 'react-redux'

import List from '../components/List'
import { filtersHandler } from '../modules/filtersHandler'
import { fetchAction } from '../actions/fetchAction'

class ListContainer extends Component {
  componentWillMount() {
    this.props.preLoadData(this.props.list);
    if (this.props.filtering) {
      this.props.preLoadData('filters')
    }
  }

  renderList() {
    let {object, filters} = this.props.data;
    if (this.props.filtering) {
      object = filtersHandler(object, filters)
    };
    return (
      <List object = {object}/>
    )
  }

  renderLoading() {
    return <h4 style={{lineHeight: '300px', textAlign: 'center'}}>Loading {this.props.list}</h4>
  }
  
  render() {
    return ( 
      <div className={this.props.size}>
        {this.props.data.objectFetched ? this.renderList() : this.renderLoading()}
      </div> 
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let data = {
    object: state[ownProps.list][ownProps.list],
    objectFetched: state[ownProps.list].fetched
  }
  if (ownProps.filtering) {
    data['filters'] = state.filters.filters;
    data['filtersFetched'] = state.filters.fetched;
  }
  return {
    data: data
  }
}

export default connect(
  mapStateToProps,
  {preLoadData: fetchAction}
)(ListContainer)
