import React, {Component} from 'react';

import Input from '../components/Input';
import AddButton from '../components/AddButton';

import { valueHandler } from '../components/handlers/valueHandler';
import { typeHandler } from '../components/handlers/typeHandler';
import { dateHandler } from '../components/handlers/dateHandler';

class AddForm extends Component {
                constructor(props) {
                                super(props);
                                this.state = {
                                                inputes: []
                                }
                                this.inputsHandler = this.inputsHandler.bind(this);
                                this.addData = this.addData.bind(this)
                }

                componentWillMount() {
                        let newInputes = this.props.inputes;
                        for (let i = 0; i < newInputes.length; i++) {
                                let name = newInputes[i].name;
                                this.setState (prevState => ({
                                        inputes: [...prevState.inputes, [name, '', '']]
                                }))
                        }
                }

                inputsHandler(inputName, inputValue) {
                        let { inputes } = this.state;
                        for (let i = 0; i < inputes.length; i++) {
                                let name = inputes[i][0];
                                let value = inputes[i][1];
                                let info = inputes[i][2];
                                if (inputName === 'value') {
                                        info = valueHandler(inputValue);
                                } else if (inputName === 'type') {
                                        info = typeHandler(inputValue);
                                } else if (inputName === 'date') {
                                        info = dateHandler(inputValue);
                                }
                                if (name === inputName) {
                                        this.setState(inputes[i] = [name, inputValue, info])
                                }   
                        }
                }

                componentDidUpdate() {
                        console.log (this.state.inputes);
                }

                confirmedData() {
                                let {inputes} = this.state;
                                let count = 0;
                                for (let i = 0; i < inputes.length; i++) {
                                        if (inputes[i].info === 'correct') {
                                                count++
                                        }
                                }
                                if (count === inputes.lenght) {
                                        return true
                                } else return false
                }

                addData(submit){
                                let {value, type, date} = this.state
                                if (submit) {
                                                this.props.onClick(value, type, date)                
                                }                                     
                }

                render() {  
                                let {valueStatus, typeStatus, dateStatus} = this.state;
                                let statuses = [valueStatus, typeStatus, dateStatus];
                                let {inputes} = this.props;
                                for (let i = 0; i < inputes.length; i++) {
                                        inputes[i].status = statuses[i];
                                }                                    
                                return (
                                        <div>           
                                                <form className = "form-horizontal">
                                                        <fieldset>
                                                                <legend>Add transaction</legend>
                                                                {inputes.map((input, i) => {
                                                                        return (
                                                                                <Input
                                                                                        key={"input_" + i}
                                                                                        type={input.type}
                                                                                        values={input.values}
                                                                                        name={input.name}
                                                                                        inputStatus={input.status}
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