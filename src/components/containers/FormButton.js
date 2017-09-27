import React, {Component} from 'react';
import axios from 'axios';

sendNewData() {
  let {value, type, date} = this.props;
  let id = this.state.id;
  this.props.onChange(id, value, type, date);               
}

axios.get('http://localhost:5000/transactions')
.then(response => {
    let newId = (response.data.length + 1);          
    this.setState({
        id: newId,
    })
})
.catch(error => {
    console.log('Error in getting json with transactions' + error);
})