import React, {Component} from 'react';
import moment from 'moment';
import axios from 'axios';

class InputHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
           id: null,
           valueStatus: 'empty',
           dateStatus: 'empty'
        }
    }

    componentWillReceiveProps(nextProps) {
          axios.get('http://localhost:6000/transactions')
          .then(response => {
              let newId = (response.data.length + 1);          
              this.setState({
                  id: newId,
              })
          })
          .catch(error => {
              console.log('Error in getting json with transactions' + error);
          })
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
    }

    sendNewData() {
        let date = moment(this.props.date).format('HH:mm - DD.MM.YYYY');
        let value = this.props.value;
        let id = this.state.id;
        this.props.onChange(id, value, date);               
    }

    render() {
      const checkerAnnouncer = () => { 
          let { id, valueStatus, dateStatus} = this.state; 
          if (valueStatus === 'empty' && dateStatus === 'empty') {
              return <h4>Add information about new transaction</h4>
          } else if (valueStatus === 'correct' && dateStatus === 'correct') {
              return <h3 onClick={this.sendNewData.bind(this)}>Add transaction</h3>
          } else {
            return (
              <div>
                  <h4>Id for the next transaction: {id}</h4>
                  <h4>Value status: {valueStatus}</h4>
                  <h4>Type status: {this.props.type}</h4>
                  <h4>Date status: {dateStatus}</h4>
              </div>
            )
          }           
      }

      return (
        <div>
          {checkerAnnouncer()}
        </div>
      )

    }
  }

  export default InputHandler;