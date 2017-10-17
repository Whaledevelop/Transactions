import React, {Component} from 'react';

class Input extends Component {
    inputHandler(e) {
        let {name, value} = e.target;
        this.props.onChange(name, value);
    }

    inputView() {
        if (this.props.inputType === 'text') {
            console.log ('text');
            return (
                <input 
                    type="text"
                    className="form-control"
                    onChange={this.inputHandler}
                    name = {this.props.name}/>
            )
        } else if (this.props.inputType === 'select') {
            let values = this.props.values;
            values.unshift('');
            return (
                <select 
                    id="selectType" 
                    className="form-control"
                    onChange={this.inputHandler}
                    name = {this.props.name}>
                        {values.map((value, i) => {
                            return (
                                <option key={"value_" + i}>{value}</option>
                            )
                            
                        })}
                </select>
            )
        } else if (this.props.inputType === 'date') {
            return (
                <input 
                    type="datetime-local" 
                    max="3000-12-30T00:00"
                    className='form-control'
                    onChange={this.inputHandler}
                    name = {this.props.name}/>    
            )
        }
    }
    
    render () {
        return (
          <div className="form-group">
              <div className="col-lg-4">
                      <label>{this.props.name}</label>
                      {this.inputView()}
              </div> 
          </div> 
        )       
    }
}

export default Input;