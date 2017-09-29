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
        this.sendNewId = this.sendNewId.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let block = nextProps.block;
        console.log(block);
        if (!block) {
            axios.get('http://localhost:3333/transactions')
                    .then(response => {
                        {
                            let newId = (response.data.length + 1);
                            console.log(newId);          
                            this.setState({
                                id: newId,
                                addButtonClassName: 'btn btn-primary'
                            })
                        }
                    })
                    .catch(error => {
                        console.log('Error in getting json with transactions' + error);
                    })
        }   
    }

    sendNewId() {
        let block = this.props.block;
        console.log(block);
        if (block) {
            this.setState ({
                errorMessage: 'Fill all inputs to add new transaction'
            })
        } else {
            this.setState({
                errorMessage: ''
            })
            this.props.onClick(this.state.id);
        }               
    }

    render() {
      return (
        <div>
            <div id="addButton" className={this.state.addButtonClassName} onClick={this.sendNewId}>Add transaction</div>
            <h4>{this.state.errorMessage}</h4>
        </div>
      )
    }   
}

export default FormButton;



