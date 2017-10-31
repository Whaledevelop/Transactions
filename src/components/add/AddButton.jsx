import React, {Component} from 'react';

class AddButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submit: false,
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
        className: 'btn btn-primary'
      })
    } else {
      this.setState({
        submit: false,
        className: 'btn btn-primary disabled'
      })
    }
  }

  handleButton() {
    if (this.state.submit) {
      this.setState({className: 'btn btn-success'})
      this.props.onClick()
    } else {
      this.setState({className: 'btn btn-danger'})
    }
  }

  renderMessage(className) {
    if(className === 'btn btn-primary') {
      return 'Ready to add'
    } else if (className === 'btn btn-danger') {
      return 'Fill all inputs with correct data'
    } else return ''
  }

  render() {
    let {className} = this.state;
    return (
      <div className='col-lg-12'>
        <div
          style={{width: '80px', borderRadius: "3px", marginTop: "15px", marginLeft: '151px'}}
          className={className}
          onClick={this.handleButton}>
          Add
        </div>
        <div className="addMessage">{this.renderMessage(className)}</div>
      </div>
    )
  }   
}

export default AddButton;