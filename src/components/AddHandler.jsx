import React, {Component} from 'react';

import { valueHandler } from './handlers/valueHandler';
import { typeHandler } from './handlers/typeHandler';
import { dateHandler } from './handlers/dateHandler';
import InputStatus from './InputStatus';

class AddHandler extends Component {
        constructor(props) {
            super(props);
            this.state = {
                valueStatus: '',
                typeStatus: '',
                dateStatus: ''
            }
        }

      componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
            let { value,type,date } = nextProps.transaction;
            let valueStatus = valueHandler(value);
            let typeStatus = typeHandler(type);       
            let dateStatus = dateHandler(date);
            this.setState ({
                valueStatus: valueStatus,
                typeStatus: typeStatus,
                dateStatus: dateStatus
            })
        }

        shouldComponentUpdate(nextState) {
            console.log('shouldComponentUpdate', nextState)
            return (
                this.state.valueStatus !== nextState.valueStatus ||
                this.state.typeStatus !== nextState.typeStatus ||
                this.state.dateStatus !== nextState.dateStatus
            )
        }

        componentWillUpdate(nextState) {
            let { valueStatus, typeStatus, dateStatus} = nextState;
            console.log ('componentDidUpdate', nextState);
            if (valueStatus === 'correct' & typeStatus === 'correct' & dateStatus === 'correct') {
                this.props.onConfirm(true);
            } else {
                this.props.onConfirm(false);
            }
        } 

        render() {
            let { valueStatus, typeStatus, dateStatus } = this.state;
            return <InputStatus
                        valueStatus = {valueStatus}
                        typeStatus = {typeStatus}
                        dateStatus = {dateStatus}
                        input = {this.props.input}/>  
        }
    }

    export default AddHandler;