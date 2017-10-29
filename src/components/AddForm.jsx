import React, {Component} from 'react'
import Input from './Input'
import AddButton from './AddButton'

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transaction: {},
      info: {}
    }
    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs(name, value, info) {
    this.setState(prevState => ({
      transaction: {...prevState.transaction, [name] : value},
      info: {...prevState.info, [name] : info}
    }));
  }

  render() {
    let { info, transaction } = this.state;  
    let { onClick, object, inputes, optionalObjName, optionalObj } = this.props;
    if (optionalObjName !== undefined) {
      let optionalInputIndex = inputes.findIndex(input => (input.name === optionalObjName))
      inputes[optionalInputIndex].selectValues = optionalObj;
    }
    return (
      <div>
        <form className="form-horizontal">
          <fieldset>
            <legend>Add {object}</legend>
            {inputes.map((input,i) => {
              return (
                <Input 
                  key = {"input_" + i}
                  input={input} 
                  onChange={this.handleInputs}/>
              )     
            })}
            <AddButton
              info = {info}
              inputesAmount = {inputes.length}
              onClick={() => {onClick(transaction)}}/>
          </fieldset>           
        </form>
      </div>
    )
  } 
}

export default AddForm

