import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import InputHandler from '../containers/InputHandler';

class AddForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
            value: '',
            type: 'income',
            date: ''
      }
    }

    inputValue() {
        let newValue = this.inputtedValue.value;
        this.setState({
            value: newValue             
        }) 
    }

    inputType() {
        let newType = this.inputtedType.value;
        this.setState({
            type: newType
        })  
    }

    inputDate(e) {
      let newDate = this.inputtedDate.value;
      this.setState({
            date: newDate        
      })    
    }

    addConfirmedData(craftedId, confirmedValue, confirmedDate) {
        this.props.onChange(craftedId, confirmedValue, this.state.type, confirmedDate);
        this.setState({
            value: '',
            type: 'income',
            date: ''
        });
        this.inputtedValue.value = '';
        this.inputtedType.value = 'income';
        this.inputtedDate.value = '';
    }

    render() {
        return (
            <div>
                <div>
                    <Link to="/">
                        <button>Transaction List</button>
                    </Link>
                </div>
                <form>
                    <fieldset>
                        <legend>Add transaction</legend>
                        <div>
                            <label htmlFor="inputValue">Value</label>
                            <input type="text" id="inputValue" onChange={this.inputValue.bind(this)}
                                ref={(input) =>{this.inputtedValue = input }}/>
                        </div>
                        <div>
                            <label htmlFor="selectType">Type</label>
                            <select id="selectType" onChange={this.inputType.bind(this)}
                                ref={(input) =>{this.inputtedType = input }}>
                                    <option>income</option>
                                    <option>consumption</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="inputDate">Date</label>
                            <input type="datetime-local" id="inputDate" max="2030-12-30T00:00" 
                                onChange={this.inputDate.bind(this)}
                                ref={(input) =>{this.inputtedDate = input }}/>    
                        </div>
                        <div>
                            <InputHandler 
                                value={this.state.value}
                                type={this.state.type}
                                date={this.state.date} 
                                onChange={this.addConfirmedData.bind(this)}/>
                        </div>
                    </fieldset> 
                </form>
            </div>
        )
    }
}

export default AddForm;