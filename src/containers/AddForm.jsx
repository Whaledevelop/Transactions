import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Input from '../components/Input';
import AddButton from '../components/AddButton';

import { inputsDataHandler } from '../components/modules/inputsDataHandler';
import { dataForPostCrafter } from '../components/modules/dataForPostCrafter';

class AddForm extends Component {
                constructor(props) {
                        super(props);
                        this.state = {
                                data: []
                        }
                        this.inputsHandler = this.inputsHandler.bind(this);
                        this.addData = this.addData.bind(this)
                }

                componentWillMount() {
                        let { inputes } = this.props;
                        for (let i = 0; i < inputes.length; i++) {
                                inputes[i]['value'] = '';
                                inputes[i]['info'] = '';
                        }
                        this.setState({
                                data: inputes
                        })                    
                }

                inputsHandler(inputName, inputValue) {
                        let { data} = this.state;
                        let newData = inputsDataHandler(inputName, inputValue, data);
                        this.setState(prevState => (
                                prevState.data = newData
                        ))            
                }

                addData(submit){
                        if (submit) {
                                let {object} = this.props;
                                axios.get(`http://localhost:3333/${object}`)
                                        .then(response => {
                                                        let id = (response.data.length + 1);
                                                        let {data} = this.state;
                                                        let newData = dataForPostCrafter(id, data);
                                                        axios.post(`http://localhost:3333/${object}`, newData)
                                                                .then(response => {console.log(response.data)})
                                                                .catch(error => {console.log('Error in posting new transaction' + error)})
                                        })
                                        .catch(error => {console.log('Error in getting json' + error)})
                        }                                  
                }

                confirmedData(data) {
                        let count = 0;
                        for (let i = 0; i < data.length; i++) {
                                let {info} = data[i];
                                if (info === 'correct') {count++}                
                        }
                        if (count === data.length) {return true
                        } else return false
                }
                
                singleNameObject(object) {
                        return object.slice(0, (object.length - 1));
                }

                render() {
                        let {data} = this.state; 
                        let {object} = this.props;                                 
                        return (
                                <div className='container'>
                                        <div className='row'>
                                                <Link to="/">
                                                        <button className="btn btn-primary authenticButton">
                                                                Transactions List
                                                        </button>
                                                </Link>
                                                <div>           
                                                        <form className = "form-horizontal">
                                                                <fieldset>
                                                                        <legend>Add {this.singleNameObject(object)}</legend>
                                                                        {data.map((input, i) => {
                                                                                let {name, type, selectValues, colors, info} = input;
                                                                                return (
                                                                                        <Input
                                                                                                key={"input_" + i}
                                                                                                name={name}
                                                                                                type={type}
                                                                                                selectValues={selectValues}
                                                                                                colors={colors}
                                                                                                info={info}
                                                                                                onChange={this.inputsHandler}/>
                                                                                )
                                                                        })}
                                                                        <AddButton
                                                                                object = {this.singleNameObject(object)}
                                                                                submit = {this.confirmedData(data)}
                                                                                onClick={this.addData}/>
                                                                </fieldset> 
                                                        </form>
                                                </div>   
                                        </div>
                                </div>
                                
                        )
                }
}

export default AddForm;