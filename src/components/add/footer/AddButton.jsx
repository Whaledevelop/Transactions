import React, {Component} from 'react';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount : 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  plusClickCount() {
    this.setState(prevState => ({
      clickCount: prevState.clickCount + 1
    }))
  }

  handleClick() {
    switch (this.props.addStatus) {
      case "Ready" : {
        this.props.onClick("Done");
        this.setState({ clickCount: 0 });
        break;
      }
      case "Not ready" : {
        this.props.onClick("Rejected");
        this.plusClickCount();
        break;
      }
      case "Rejected" : {
        const addStatus = this.state.clickCount >= 3 ? "Overrejected" : "Rejected"
        this.props.onClick(addStatus)
        this.plusClickCount();
        break;
      }
      default: this.plusClickCount();
    }
  }

  render() {
    return (
      <div
        className={`${this.props.className} addButton`}
        onClick={this.handleClick}
      >
      Add
    </div>
    )
  }
}
 
export default AddButton;