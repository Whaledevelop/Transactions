import React, {Component} from 'react';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      message: '',
      className: 'btn btn-primary disabled'
    }
    this.handleButton = this.handleButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let infoValues = Object.values(nextProps.info)
    let correctData = infoValues.filter(i => i === 'correct');
    if (correctData.length === nextProps.inputesAmount) {
      this.setState({
        submit: true, 
        message: 'Ready to add',
        className: 'btn btn-primary'
      })
    } else {
      this.setState({
        submit: false,
        message: '',
        className: 'btn btn-primary disabled'
      })
    }
  }

  handleButton() {
    if (this.state.submit) {
      this.setState({
        message: "Success!",
        className: "btn btn-success"
      })
      this.props.onClick()
    } else {
      this.setState({
        message: "Fill all inputs with correct data",
        className: "btn btn-danger"
      })
    }
  }

  renderButton() {
    let buttonStyle = {width: '80px', borderRadius: "3px", marginTop: "15px"};
    let {submit, className} = this.state
    if (submit) {
      return (
        <button
          style={buttonStyle}
          className={className}
          onClick={this.handleButton}>
          Add
        </button>
      )
    } else {
      return (
        <div
          style={buttonStyle}
          className={className}
          onClick={this.handleButton}>
          Add
        </div>
      )
    }
  }

  render() {
    return (
      <div className='col-lg-12'>
        {this.renderButton()}
        <h4>{this.state.message}</h4>
      </div>
    )
  }   
}

export default AddButton;