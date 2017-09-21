import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './bootstrap.css';
import './App.css';

export class AddForm extends Component {


    render () {
        return (
            <div className="container">
                <div className="col-md-12 col-lg-12">
                    <div className="col-lg-4">
                        <div>
                            <Link to="/">
                                <button type="button" className="btn btn-default" id="addButton">Transaction List</button>
                            </Link>
                        </div>
                        <form className="form-horizontal">
                            <fieldset>
                                <legend>Add transaction</legend>
                                <div className="form-group">
                                    <label htmlFor="inputValue" className="col-lg-2 control-label">Value</label>
                                    <div className="col-lg-10">
                                        <input type="text" id="inputValue" className="form-control"
                                            //ref={(input) => { this.inputValue = input }} 
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="selectType" className="col-lg-2 control-label">Type</label>
                                    <div className="col-lg-10">
                                        <select id="selectType" className="form-control"
                                            //ref={input => {this.inputType = input}}
                                        >
                                            <option>income</option>
                                            <option>consumption</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputDate" className="col-lg-2 control-label">Date</label>
                                    <div className="col-lg-10">
                                        <input type="datetime-local" id="inputDate" max="2030-12-30T00:00"
                                                //ref={(input) => { this.inputDate = input }}
                                        />    
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-10">               
                                        <button type="submit" className="btn btn-default"
                                            //onClick={this.addTransaction.bind(this)}
                                        >Add transaction</button>
                                    </div>
                                </div>
                            </fieldset> 
                        </form>
                    </div>            
                </div>
            </div>  
        )
    }
}

export default AddForm;