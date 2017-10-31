import React, {Component} from 'react'
import Input from './Input'
import AddButton from './AddButton'

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: {},
      info: {}
    }
    this.handleInputs = this.handleInputs.bind(this);
  }

  handleInputs(name, value, info) {
    this.setState(prevState => ({
      newItem: {...prevState.newItem, [name] : value},
      info: {...prevState.info, [name] : info}
    }));
  }

  render() {
    let { info, newItem } = this.state;  
    let { onClick, addData } = this.props;
    return (
      <div style={{marginLeft: '80px'}}>
        <form className="form-horizontal">
          <fieldset>
            {addData.inputes.map((input,i) => {
              return (
                <Input 
                  key = {"input_" + i}
                  input={input} 
                  newItem={newItem}
                  onChange={this.handleInputs}/>
              )     
            })}
            <AddButton
              onClick={() => onClick(newItem)}
              info = {info}
              inputesAmount = {addData.inputes.length}/>
          </fieldset>           
        </form>
      </div>
    )
  } 
}

export default AddForm
