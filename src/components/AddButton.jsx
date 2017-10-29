import React, {Component} from 'react';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClassName: 'btn btn-primary disabled',
      message: '',
      messageClassName: ''
    }
    this.handleButton = this.handleButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if  (nextProps.submit) {
      this.setState({
        buttonClassName: 'btn btn-primary'
      })
    } else {
      this.setState ({
        buttonClassName: 'btn btn-primary disabled',
        message: ''
      })  
    }   
  }

  handleButton() {
    let { submit, onClick } = this.props;
    if (submit === true) {
      this.setState({
        message: 'Success!',
        messageClassName: 'successMessage'
      })
    } else {
      this.setState ({
        buttonClassName: 'btn btn-danger disabled',
        message: 'Fill all inputs with correct data',
        messageClassName: 'errorMessage'
      })
    } 
    onClick(submit);       
  }


  render() {
    let {buttonClassName, message, messageClassName} = this.state;
    return (
      <div className='col-lg-12'>
        <a 
          id="addButton" 
          className={buttonClassName} 
          onClick={this.handleButton}>
          Add transaction
        </a>
        <h4 className={messageClassName}>{message}</h4>
      </div>
    )
  }   
}

export default AddButton;