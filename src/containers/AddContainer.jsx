import React, {Component} from 'react'
import { connect } from 'react-redux'

import { addAction } from '../actions/addAction'
import { fetchAction } from '../actions/fetchAction'
import AddForm from '../components/AddForm'

class AddContainer extends Component {
  componentWillMount(){
    this.props.preLoadData(this.props.object);
    if (this.props.optionalObj !== undefined) {
      this.props.preLoadData(this.props.optionalObj)  
    }
  }

  submitAdding(item) {
    item['id'] = this.props.id;
    this.props.onAddItem(item, this.props.object);
    this.props.preLoadData(this.props.object);
  } 
  
  render() {
    let {object, data, optionalObjName, inputes} = this.props;
    return (
      <AddForm 
        onClick={this.submitAdding.bind(this)}
        object={object}
        optionalObj={data[optionalObjName]}
        optionalObjName={optionalObjName}
        inputes={inputes}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let {object, optionalObjName, optionalObj} = ownProps;
  let data = {
    id: state[object][object].length + 1
  }
  if (optionalObj !== undefined) {
    data[optionalObjName] = state[optionalObj][optionalObj].map(item => {return item.id})
    data[optionalObjName].unshift('');
  }
  return {
    data: data
  }
}

export default connect(
  mapStateToProps,
  {
    onAddItem: addAction,
    preLoadData: fetchAction
  }
)(AddContainer);