import React, {Component} from 'react';

class Input extends Component {    
        inputHandler(e) {
                const {name, value} = e.target;
                this.props.onChange(name, value);
        }

        inputView() {
                let {name} = this.props;
                if (name === 'Value') {
                        return (
                                <input 
                                        type="text"
                                        className="form-control"
                                        onChange={this.inputHandler.bind(this)}
                                        name = 'Value'/>
                        )
                } else if (name === 'Type') {
                        return (
                                <select 
                                        id="selectType" 
                                        className="form-control"
                                        onChange={this.inputHandler.bind(this)}
                                        name = 'Type'>
                                                <option></option>
                                                <option>income</option>
                                                <option>consumption</option>
                                </select>
                        )
                } else if (name === 'Date') {
                        return (
                                <input 
                                        type="datetime-local" 
                                        max="3000-12-30T00:00"
                                        className='form-control'
                                        onChange={this.inputHandler.bind(this)}
                                        name = 'Date'/>
                        )           
                }
        }

        render() {
                const { name, inputStatus } = this.props
                return (
                        <div className="col-lg-12">
                                <div className="col-lg-4">
                                        <div className="form-group">           
                                                <label>{name}</label>
                                                {this.inputView()}            
                                        </div>
                                </div>
                                <div className="col-lg-6">
                                        <h4 className="inputHandler">{inputStatus}</h4>
                                </div>
                        </div>
                )
        }
}

export default Input;