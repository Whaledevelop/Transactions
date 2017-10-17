import React, {Component} from 'react';

class AddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          addButtonClassName: 'btn btn-primary disabled',
          errorMessage: ''
        }
        this.sendNewId = this.sendNewId.bind(this);
    }
                          
    componentWillReceiveProps(nextProps) {
        const { block } = nextProps;
        if (!block) {
            this.setState({
                addButtonClassName: 'btn btn-primary',
                errorMessage: ''
            })
        } else {
            this.setState ({
                addButtonClassName: 'btn btn-primary disabled',
            })  
        }   
    }

    sendNewId() {
        const { block } = this.props;
        if (block) {
            this.setState ({
                errorMessage: 'Fill all inputs with correct data to add new transaction',
                addButtonClassName: 'btn btn-primary disabled'
            })
        } else {
            this.setState({
                errorMessage: ''
            })
        }               
    }

    render() {
            const { errorMessage, addButtonClassName} = this.state;
            return (
                    <div>
                            <div 
                                    id="addButton" 
                                    className={addButtonClassName} 
                                    onClick={this.sendNewId}>
                                    Add transaction
                            </div>
                            <h4 className="errorMessage">{errorMessage}</h4>
                    </div>
            )
    }   
}

export default AddButton;



