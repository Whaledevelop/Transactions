import React, {Component} from 'react';
import moment from 'moment';

class InputHandler extends Component {
      constructor(props) {
          super(props);
          this.state = {
            valueStatus: '',
            typeStatus: '',
            dateStatus: ''
          }
      }

      componentWillReceiveProps(nextProps) {
          let {value,type,date} = nextProps.transaction;
          let {valueStatus, typeStatus, dateStatus} = this.state;
          let parsedValue = parseInt(value, 10);
          if (value === '') {
                valueStatus = '';       
          } else if (isNaN(parsedValue)) {
                valueStatus = 'Please, enter numbers';
          } else if (parsedValue < 0) {
                valueStatus = 'Enter positive number';
          } else if (parsedValue > 1000000) {
                valueStatus = 'Wow wow wow, it\'s too much, stop, you are not a millionaire';
          } else {
                valueStatus = 'correct';
          }
          if (type === '') {
                typeStatus = '';
          } else if (type === 'income' || type === 'consumption') {
                typeStatus = 'correct'
          }
          let dateForComparison = moment(date).format('YYYYMMDD');
          let now = moment().format('YYYYMMDD');
          let lowestAvailableDate = moment().subtract(30, 'years').format('YYYYMMDD');
          if (date === '') {
              dateStatus = '';
          } else if (dateForComparison > now) {
              dateStatus = 'Enter data about transactions that you have already made';
          } else if (dateForComparison < lowestAvailableDate) {
              dateStatus = 'Owww, this is too old event for this app';
          } else {
              dateStatus = 'correct';
          }
          this.setState({
              valueStatus: valueStatus,
              typeStatus: typeStatus,
              dateStatus: dateStatus
          })
    }

    componentDidUpdate() {
        let {valueStatus, typeStatus, dateStatus} = this.state;
        this.props.onCheck(valueStatus, typeStatus, dateStatus);
    }

    render() {
      const statusHandler = () => {
          let input = this.props.input;
          let {valueStatus, typeStatus, dateStatus} = this.state;
          if (input === 'value') {
              return <h4>{valueStatus}</h4>
          } else if (input === 'type') {
              return <h4>{typeStatus}</h4>
          } else if (input === 'date') {
              return <h4>{dateStatus}</h4>
          } else return <h5>no data</h5>
      }
      return <div>{statusHandler()}</div>      
  }
}

export default InputHandler;