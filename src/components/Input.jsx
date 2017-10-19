import React, {Component} from 'react';

class Input extends Component {    
        inputHandler(e) {
                const {name, value} = e.target;
                this.props.onChange(name, value);
        }

        inputView() {
                let {name, type} = this.props;  
                if (type === "text") {
                        return (
                                <input 
                                        type="text"
                                        className="form-control"
                                        onChange={this.inputHandler.bind(this)}
                                        name = {name}/>
                        )
                } else if (type === "select") {
                        let {values} = this.props;
                        values.unshift('');
                        return (
                                <select 
                                        id="selectType" 
                                        className="form-control"
                                        onChange={this.inputHandler.bind(this)}
                                        name = {name}>
                                                {values.map((value, i) => {
                                                        return <option key={"value_" + i}>{value}</option>  
                                                })}         
                                </select>
                        )
                } else if (type === "date") {
                        return (
                                <input 
                                        type="datetime-local" 
                                        max="3000-12-30T00:00"
                                        className='form-control'
                                        onChange={this.inputHandler.bind(this)}
                                        name = {name}/>
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