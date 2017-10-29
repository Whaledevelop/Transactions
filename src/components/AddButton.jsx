import React, {Component} from 'react';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
      clicked: false
    }
    this.handleButton = this.handleButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let infoValues = Object.values(nextProps.info)
    let correctData = infoValues.filter(i => i === 'correct');
    if (correctData.length === nextProps.inputesAmount) {
      this.setState({submit: true, clicked: false})
    } else {
      this.setState({submit: false, clicked: false})
    }
  }

  handleButton() {
    if (this.state.submit) {this.props.onClick()  }   
    this.setState({clicked: true}) 
  }

  addButtonHandler() {
    let {submit, clicked} = this.state;
    let message = '';
    let className = '';
    if (submit === true & clicked === true) {
      message = 'Success'
      className = 'btn btn-success'
    } else if (submit === false & clicked === true) {
      message = 'Fill all inputs with correct data'
      className = 'btn btn-danger'
    } else if (submit === true & clicked === false) {
      message = 'Ready to add'
      className = 'btn btn-primary'
    } else if (submit === false & clicked === false) {
      message = ''
      className = 'btn btn-primary disabled'
    }
    return {message: message, className: className}
  } 

  render() {
    return (
      <div className='col-lg-12'>
        <div
          style={{width: '80px', borderRadius: "3px", marginTop: "15px"}} 
          className={this.addButtonHandler().className}
          onClick={this.handleButton}>
          Add
        </div>
        {this.addButtonHandler().message}
      </div>
    )
  }   
}

export default AddButton;