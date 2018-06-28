import React, {Component} from 'react';

import AddFormFooter from '../components/add/footer/AddFormFooter';

class AddFormFooterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addStatus: "Not ready"
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.info !== this.props.info) {
      const infoValues = Object.values(nextProps.info);
      const addStatus = (
        infoValues.every(info => info === 'correct') &&
        nextProps.inputsAmount === infoValues.length
      ) 
        ? "Ready" 
        : "Not ready"
      this.setState({
        addStatus: addStatus
      })
    }   
  }

  handleButtonClick(addStatus) {
    this.setState({ 
      addStatus: addStatus
    });
    if (addStatus === "Done") {
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <AddFormFooter
        addStatus = {this.state.addStatus}
        onClick = {this.handleButtonClick}
      />
    )
  }   
}

export default AddFormFooterContainer;