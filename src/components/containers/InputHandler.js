import React, {Component} from 'react';
import moment from 'moment';

class InputHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
           valueStatus: 'empty',
           dateStatus: 'empty'
        }
    }

    componentWillReceiveProps(nextProps) {
          let newValue = nextProps.value;
          let newParsedValue = parseInt(newValue, 10);
          if (newValue === '') {
              this.setState({
                valueStatus: 'empty'
              })
          } else if (isNaN(newParsedValue)) {
              this.setState({
                valueStatus: 'Please, enter numbers'
              })
          } else if (newParsedValue < 0) {
              this.setState({
                valueStatus: 'Please, enter positive number' 
              })
          } else if (newParsedValue > 1000000000) {
              this.setState({
                valueStatus: 'Wow wow wow, it\'s too much, stop, you are not a billionaire. Enter correct value'
              })
          } else {
              this.setState({
                valueStatus: 'correct'
              })
          }
          let newDate = nextProps.date;
          let newDateForComparison = moment(newDate).format('YYYYMMDD');
          let now = moment().format('YYYYMMDD');
          let lowestAvailableDate = moment().subtract(30, 'years').format('YYYYMMDD');
          if (newDate === '') {
              this.setState({
                dateStatus: 'empty'
              })
          } else if (newDateForComparison > now) {
              this.setState({
                dateStatus: 'Enter past transaction. This app is not about future'
              })
          } else if (newDateForComparison < lowestAvailableDate) {
              this.setState({
                dateStatus: 'You have selected too old date. Please, enter correct date'
              })
          } else {
              this.setState({
                  dateStatus: 'correct'
              })
          }
          this.props.onChange(valueStatus, dateStatus);
    }

    render() {
        const statusHandler = () => {
            let input = this.props;
            let {valueStatus, dateStatus} = this.state;
            if (input === 'value') {
                return <h4>{valueStatus}</h4>
            } else if (input === 'type') {
                return <h4>{this.props.type}</h4>
            } else if (input === 'date') {
                return <h4>{dateStatus}</h4>
            } else return <h5>no data</h5>
        }
        return <div>{statusHandler()}</div>      
    }
  }

  export default InputHandler;