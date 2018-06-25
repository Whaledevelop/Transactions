import React, {Component} from 'react'
import { connect } from 'react-redux'

import {fetch, switchMode} from '../actions'

import List from '../components/app/List'
import { filtersHandler } from '../modules/filtersHandler'

class ListContainer extends Component {
  componentWillMount() {
    this.props.onFetchData(this.props.list);
    if (this.props.filtering) {
      this.props.onFetchData('filters')
    }
  }

  renderList() {
    let {data, filtering, list, onSwitchMode} = this.props;
    if (filtering) {
      data.object = filtersHandler(data.object, data.filters)
    };
    const singleList = list.slice(0, -1);
    return (
      <div>
        <List object = {data.object}/>
        <a className="btn btn-primary" onClick={() => onSwitchMode(singleList, 'modal')}>
          Add {singleList}
        </a>
      </div>
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
    object: state[ownProps.list].data,
    objectFetched: state[ownProps.list].fetched
  }
  if (ownProps.filtering) {
    data['filters'] = state.filters.data;
    data['filtersFetched'] = state.filters.fetched;
  }
  return {
    data: data
  }
}

export default connect(
  mapStateToProps,
  {
    onFetchData: fetch,
    onSwitchMode: switchMode
  }
)(ListContainer)
