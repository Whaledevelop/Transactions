import React, {Component} from 'react';
import axios from 'axios';

import Input from '../components/Input';
import AddButton from '../components/AddButton';

import { inputsHandler } from '../components/modules/inputsHandler';
import { nameInterpratator } from '../components/modules/nameInterpratator';

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
                        for (let i = 0; i < data.length; i++) {
                                let {name, type} = data[i]
                                if (name === inputName) {
                                        let selectValues = [];
                                        let filterBy = '';
                                        if (type==='select') {
                                               selectValues = data[i].selectValues;
                                        }
                                        if (inputName === 'name') {
                                                for (let i=0; i < data.length; i++) {
                                                        if(data[i].name === 'filterBy') {
                                                                filterBy = data[i].value
                                                        }
                                                }
                                        }
                                        let info = inputsHandler(inputValue, type, selectValues, filterBy);
                                        this.setState(prevState => (
                                                prevState.data[i].value = inputValue,  
                                                prevState.data[i].info = info
                                        ))
                                }   
                        }

                }

                addData(submit){
                        if (submit) {
                                let {object} = this.props;
                                axios.get(`http://localhost:3333/${object}`)
                                        .then(response => {
                                                        let id = (response.data.length + 1);
                                                        let newData = {};
                                                        let {data} = this.state;
                                                        newData['id'] = id;       
                                                        for (let i = 0; i < data.length; i++) {
                                                                let {name, value} = data[i];
                                                                newData[name] = value;
                                                        }
                                                        let {name, filterBy} = newData;
                                                        let additionalData = nameInterpratator(name, filterBy);
                                                        for (let key in additionalData) {
                                                                newData[key] = additionalData[key]
                                                        }
                                                        axios.post(`http://localhost:3333/${object}`, newData)
                                                                .then(response => {console.log(response.data)})
                                                                .catch(error => {console.log('Error in posting new transaction' + error)})
                                        })
                                        .catch(error => {console.log('Error in getting json' + error)})
                        }                                  
                }

                confirmedData() {
                        let {data} = this.state;
                        let count = 0;
                        for (let i = 0; i < data.length; i++) {
                                if (data[i].info === 'correct') {count++}                
                        }
                        if (count === data.length) {return true
                        } else return false
                }
                
                singleNameObject() {
                        let {object} = this.props;
                        return object.slice(0, (object.length - 1));
                }

                render() {
                        let {data} = this.state;                                    
                        return (
                                <div>           
                                        <form className = "form-horizontal">
                                                <fieldset>
                                                        <legend>Add {this.singleNameObject()}</legend>
                                                        {data.map((input, i) => {
                                                                return (
                                                                        <Input
                                                                                key={"input_" + i}
                                                                                name={input.name}
                                                                                type={input.type}
                                                                                selectValues={input.selectValues}
                                                                                info={input.info}
                                                                                onChange={this.inputsHandler}/>
                                                                )
                                                        })}
                                                        <AddButton
                                                                submit = {this.confirmedData()}
                                                                onClick={this.addData}/>
                                                </fieldset> 
                                        </form>
                                </div>
                        )
                }
}

export default AddForm;