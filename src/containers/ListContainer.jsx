import React, {Component} from 'react'
import { connect } from 'react-redux'

import List from '../components/List'
import { filtersHandler } from '../modules/filtersHandler'
import { fetchAction } from '../actions/fetchAction'
import { turnAddModal } from '../actions/modalsActions'

class ListContainer extends Component {
  componentWillMount() {
    this.props.onFetchData(this.props.list);
    if (this.props.filtering) {
      this.props.onFetchData('filters')
    }
  }

  renderList() {
    let {data, filtering, list, onTurnAddModal} = this.props;
    if (filtering) {
      data.object = filtersHandler(data.object, data.filters)
    };
    let singleList = list.slice(0, -1);
    let currentModal = data.modals.find(modal => modal.name === singleList)
    return (
      <div>
        <List object = {data.object}/>
        <a className="btn btn-primary" onClick={() => onTurnAddModal(currentModal.id)}>
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
    object: state[ownProps.list][ownProps.list],
    objectFetched: state[ownProps.list].fetched,
    modals: state.modals
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
  {
    onFetchData: fetchAction,
    onTurnAddModal: turnAddModal
  }
)(ListContainer)
