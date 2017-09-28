import React, {Component} from 'react';
import axios from 'axios';

class FormButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: null,
          addButtonClassName: 'btn btn-primary disabled',
          errorMessage: ''
        }
        this.sendNewData = this.sendNewData.bind(this);
    }

    componentWillReceiveProps() {
        axios.get('http://localhost:3333/transactions')
            .then(response => {
                 {
                    let newId = (response.data.length + 1);          
                    this.setState({
                        id: newId
                    })
                }
            })
            .catch(error => {
                console.log('Error in getting json with transactions' + error);
            })
    }

    sendNewData() {
        let block = this.props.block;
        console.log(block);
        if (block) {
            this.setState ({
                errorMessage: 'Fill all inputs to add new transaction'
            })
        } else {
            this.setState({
                addButtonClassName: 'btn btn-primary',
                errorMessage: ''
            })
            //this.props.onClick(this.state.id);
        }               
    }

    render() {
      return (
        <div>
            <div id="addButton" className={this.state.addButtonClassName} onClick={this.sendNewData}>Add transaction</div>
            <h4>{this.state.errorMessage}</h4>
        </div>
      )
    }   
}

export default FormButton;



