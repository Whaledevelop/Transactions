import React, {Component} from 'react';

import AddButton from './AddButton';
import AddMessage from './AddMessage';

class AddFormFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addStatus: "Not ready",
      clickCount: 0
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let infoValues = Object.values(nextProps.info);
    const addStatus = (
      infoValues.every(info => info === 'correct') &&
      nextProps.inputsAmount === infoValues.length
     ) ? "Ready" : "Not ready"
    this.setState({
      addStatus: addStatus,
      clickCount: 0
    })
  }

  handleButtonClick() {
    const {addStatus, clickCount} = this.state
    if (addStatus === "Ready") {
      this.setState({
        addStatus: "Done",
        clickCount: 0
      })
      this.props.onSubmit()
    } else if (addStatus === "Not ready") {
      this.setState(prevState => {
        return {
          addStatus: "Rejected",
          clickCount: prevState.clickCount + 1
        }
      }) 
    } else if (addStatus === "Rejected") {
      this.setState(prevState => {
        return {
          addStatus: clickCount >= 3 ? "Overrejected" : "Rejected",
          clickCount: prevState.clickCount + 1
        }
      })       
    }
  }

  render() {
    return (
      <div className='col-lg-12'>
        <AddButton
          addStatus = {this.state.addStatus}
          onClick = {this.handleButtonClick}
        />
        <AddMessage
          addStatus = {this.state.addStatus}
        />
      </div>
    )
  }   
}

export default AddFormFooter;