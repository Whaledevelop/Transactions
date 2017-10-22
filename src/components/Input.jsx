import React, {Component} from 'react';

import ColorsButtons from './ColorsButtons';

import { firstLetterHandler } from './modules/firstLetterHandler';

class Input extends Component {  
        inputHandler(e) {
                const {name, value} = e.target;
                this.props.onChange(name, value);
        }
        
        colorsHandler(className) {
                this.props.onChange('className', className);
        }

        inputView() {
                let {name, type} = this.props;  
                if (type === 'text' || type === 'numbers' || type === 'description') {
                        return (
                                <input 
                                        type="text"
                                        className="form-control"
                                        onChange={this.inputHandler.bind(this)}
                                        name = {name}/>
                        )
                } else if (type === "select") {
                        let {selectValues} = this.props;
                        return (
                                <select 
                                        id="selectType" 
                                        className="form-control"
                                        onChange={this.inputHandler.bind(this)}
                                        name = {name}>
                                                {selectValues.map((value, i) => {
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
                } else if (type === 'colors') {
                        let {colors} = this.props;
                        return <ColorsButtons
                                        onClick={this.colorsHandler.bind(this)}
                                        colors={colors}/>
                }
        }

        nameForLabel(name) {          
                if (name === 'filterBy') {
                        return 'Filter by'
                } else if (name === 'className') {
                        return 'Colors'
                } else return firstLetterHandler(name, 'toUpperCase');
        }

        render() {
                const { info, name } = this.props
                return (
                        <div className="col-lg-12">
                                <div className="col-lg-4">
                                        <div className="form-group">           
                                                <label>{this.nameForLabel(name)}</label>
                                                {this.inputView()}            
                                        </div>
                                </div>
                                <div className="col-lg-6">
                                        <h4 className="inputHandler">{info}</h4>
                                </div>
                        </div>
                )
        }
}

export default Input;