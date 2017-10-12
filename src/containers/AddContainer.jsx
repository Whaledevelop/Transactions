import React, {Component} from 'react';
import axios from 'axios';

import AddHandler from '../components/AddHandler';
import AddButton from '../components/AddButton';

class AddContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          id: '',
          value: '',
          type: '',
          date: ''
      }
      this.inputHandler = this.inputHandler.bind(this);
      this.inputStatusHandler = this.inputStatusHandler.bind(this);
      this.addConfirmedData = this.addConfirmedData.bind(this);
    }

    inputHandler(e) {
        let { name, value } = e.target;
        if (name === 'value') {
            this.setState ({ value : value })
        } else if (name === 'type') {
            this.setState ({ type : value })
        } else if (name === 'date') {
            this.setState ({ date : value })
        }     
    }
 
    inputStatusHandler(correctData) {
        this.props.onConfirm(correctData)        
    }

    addConfirmedData() {
        if (!this.state.block) {
            let {id, value, type, date} = this.state;
            this.props.onClick(id, value, type, date);     
        }
    }

    render() {
        let transaction = {
            value: this.state.value,
            type: this.state.type,
            date: this.state.date
        }
        let { block } = this.state; 
        return (
            <div>           
                <form className = "form-horizontal">
                    <fieldset>
                        <legend>Add transaction</legend>
                        <div className="form-group">
                            <div className="col-lg-4">
                                <label>Value</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    onChange={this.inputHandler}
                                    name = "value"/>
                            </div>
                            <div className="col-lg-6">
                                <AddHandler
                                    input = 'value'
                                    transaction={transaction}
                                    onConfirm={this.inputStatusHandler}/>
                            </div>   
                        </div>
                        <div className="form-group">
                            <div className="col-lg-4">
                                <label>Type</label>
                                <select 
                                    id="selectType" 
                                    className="form-control"
                                    onChange={this.inputHandler}
                                    name = "type">
                                        <option></option>
                                        <option>income</option>
                                        <option>consumption</option>
                                </select>
                            </div>
                            <div className="col-lg-6">
                                <AddHandler
                                    input = 'type'
                                    transaction={transaction}
                                    onConfirm={this.inputStatusHandler}/>   
                            </div>
                        </div>
                        <div className="form-group">
                                <div className="col-lg-4">                           
                                    <label>Date</label>
                                    <input 
                                        type="datetime-local" 
                                        max="3000-12-30T00:00"
                                        className='form-control'
                                        onChange={this.inputHandler}
                                        name = "date"/>
                                </div>
                                <div className="col-lg-6">
                                    <AddHandler
                                        input = 'date'
                                        transaction={transaction}
                                        onConfirm={this.inputStatusHandler}/>
                                </div>                                
                        </div>
                        <AddButton 
                            block={block}
                            onClick={this.addConfirmedData}/>
                    </fieldset> 
                </form>
            </div>
        )
    }
}

export default AddContainer;