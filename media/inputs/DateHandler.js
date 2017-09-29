import React, {Component} from 'react';
import moment from 'moment';

class DateHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateStatus: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        let newDate = nextProps.date;
        console.log('newDate', newDate)
        let dateForComparison = moment(date).format('YYYYMMDD');
        let now = moment().format('YYYYMMDD');
        let lowestAvailableDate = moment().subtract(30, 'years').format('YYYYMMDD');
        if (date === '') {
            dateStatus = 'empty';
        } else if (dateForComparison > now) {
            dateStatus = 'Enter data about transactions that you have already made';
        } else if (dateForComparison < lowestAvailableDate) {
            dateStatus = 'Owww, this is too old event for this app';
        } else {
            dateStatus = 'correct';
        }
    }

    componentDidUpdate(nextState) {
        let dateStatus = nextState.dateStatus;
        console.log('dateStatus', dateStatus);
        //this.props.handler(valueStatus);
    }

    render() {
        return <h4>{this.state.dateStatus}</h4>
    }

}

export default DateHandler;