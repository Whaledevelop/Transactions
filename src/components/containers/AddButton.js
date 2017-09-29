import React, {Component} from 'react';
import axios from 'axios';

class AddButton extends Component {
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
        if (!block) {
            axios.get('http://localhost:3333/transactions')
                    .then(response => {
                        {
                            let newId = (response.data.length + 1);       
                            this.setState({
                                id: newId,
                                addButtonClassName: 'btn btn-primary',
                                errorMessage: ''
                            })
                        }
                    })
                    .catch(error => {
                        console.log('Error in getting json with transactions' + error);
                    })
        } else {
                this.setState ({
                    addButtonClassName: 'btn btn-primary disabled'
                })  
        }   
    }

    sendNewId() {
        let block = this.props.block;
        if (block) {
            this.setState ({
                errorMessage: 'Fill all inputs with correct data to add new transaction',
                addButtonClassName: 'btn btn-primary disabled'
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
            <h4 className="errorMessage">{this.state.errorMessage}</h4>
        </div>
      )
    }   
}

export default AddButton;



