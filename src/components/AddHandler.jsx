import React, {Component} from 'react';
//import moment from 'moment'; 

import { valueHandler } from './handlers/valueHandler';
import { typeHandler } from './handlers/typeHandler';
import { dateHandler } from './handlers/dateHandler';

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
            return (
                this.state.valueStatus !== nextState.valueStatus ||
                this.state.typeStatus !== nextState.typeStatus ||
                this.state.dateStatus !== nextState.dateStatus
            )
        }

        componentDidUpdate() {
            let { valueStatus, typeStatus, dateStatus } = this.state;
            if (valueStatus === 'correct' & typeStatus === 'correct' & dateStatus === 'correct') {
                this.props.onConfirm(true);
            } else {
                this.props.onConfirm(false);
            } 
        }

        statusHandler() {
            const { input } = this.props;
            const { valueStatus, typeStatus, dateStatus } = this.state;
            if (input === 'value') {
                return <h4>{ valueStatus }</h4>
            } else if (input === 'type') {
                return <h4>{ typeStatus }</h4>
            } else if (input === 'date') {
                return <h4>{ dateStatus }</h4>
            } else return <h5>no data</h5>
        }

        render() {
        return <div className="inputHandler">{ this.statusHandler() }</div>      
        }
    }

    export default AddHandler;