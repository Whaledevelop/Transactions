import React, {Component} from 'react'
import { inputsHandler } from '../modules/inputsHandler'
import ColorsButtons from './ColorsButtons'

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleColorButtons = this.handleColorButtons.bind(this);
  }

  handleInput(e){
    let {name, value} = e.target;
    if (this.props.input.dataType === 'numbers') {value = parseInt(value, 10)}   
    let info = inputsHandler(this.props.input, value, this.props.data);
    this.props.onChange(name, value, info);
    this.setState({
      info: info
    })
  }

  handleColorButtons(color) {
    let info
    if (color.on) {
      info = 'correct'  
    } else {
      info = ''
    }
    this.props.onChange('color', color.name, info);
    this.setState({info: info})  
  }

  renderInput(){
    let {name, type} = this.props.input;
    switch (type) {
      case ('number'||'text') : {
        return (
          <input
            type = {type}
            className="form-control" 
            name = {name}
            onChange = {this.handleInput}/>
        )
      }
      case 'select': {
        let {selectValues} = this.props.input;
        return (
          <select
            style={{width: "425px",	height: "48px"}}
            className='form-control'
            name = {name}
            onChange = {this.handleInput}>
            {selectValues.map((value,i) => {
              return (<option key={"value_"+i}>{value}</option>
            )})}
          </select>
        )     
      }
      case 'date': {
        return (
          <input 
            type="datetime-local" 
            max="3000-12-30T00:00"
            className='form-control'
            name = {name}
            onChange = {this.handleInput}/>
        )
      }
      case 'colors': {
        let {colors} = this.props.input;
        return (
          <ColorsButtons
            onClick={this.handleColorButtons}
            colors={colors}/>
        )
      }
      default: {
        return (
          <input
            type="text"
            className="form-control" 
            name = {name}
            onChange = {this.handleInput}/>
          )
      }
    }
  }

  renderInfo() {
    if(this.state.info === 'correct') {
      return <i className="fa fa-thumbs-o-up" style={{fontSize: '30px'}}></i>
    } else {
      return <h4>{this.state.info}</h4>
    }
  }

  render () {
    return (
      <div className="form-group col-lg-12">
        <div className="col-lg-4">
          <label>{this.props.input.name}</label>  
          {this.renderInput()}
        </div>
        <div className="col-lg-offset-1 col-lg-3" style={{marginTop: '30px'}}>
          {this.renderInfo()}
        </div>
      </div>
    )
  }
}

export default Input