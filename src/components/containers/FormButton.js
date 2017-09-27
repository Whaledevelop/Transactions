import React, {Component} from 'react';
import axios from 'axios';

class FormButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          newTransactionId: null,
          addButtonClassName: 'btn btn-primary disabled'
        }
        this.sendNewData = this.sendNewData.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        axios.get('http://localhost:5000/transactions')
            .then(response => {
                let newId = (response.data.length + 1);          
                this.setState({
                    newTransactionId: newId,
                })
                let {valueStatus, dateStatus} = this.props;
                if (valueStatus === 'correct'  && dateStatus === 'correct') {
                    this.setState ({
                        addButtonClassName: 'btn btn-primary'
                    })
                }
            })
            .catch(error => {
                console.log('Error in getting json with transactions' + error);
            })
    }

    sendNewData() {
        let {value, type, date} = this.props;
        let id = this.state.id;
        this.props.onClick(id, value, type, date);               
    }

    render() {
      return <button className={this.state.addButtonClassName} onClick={this.sendNewData}>Add transaction</button>
    }   
}

export default FormButton;



