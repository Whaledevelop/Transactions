import React, {Component} from 'react'
import { connect } from 'react-redux'

import { addAction } from '../actions/addAction'
import { fetchAction } from '../actions/fetchAction'
import AddForm from '../components/AddForm'

class AddContainer extends Component {
  componentWillMount(){
    this.props.preLoadData(this.props.object);
  }

  submitAdding(item) {
    item['id'] = this.props.id;
    this.props.onAddItem(item, this.props.object);
    this.props.preLoadData(this.props.object);
  } 
  
  render() {
    return (
      <AddForm onClick={this.submitAdding.bind(this)}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let object = state[ownProps.object][ownProps.object]
  return {
    id: object.length + 1,
  }
}

export default connect(
  mapStateToProps,
  {
    onAddItem: addAction,
    preLoadData: fetchAction
  }
)(AddContainer);