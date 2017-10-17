import React, {Component} from 'react';

class AddButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
          button: 'btn btn-info disabled',
          error: ''
        }
        this.addTransaction = this.addTransaction.bind(this);
    }
                          
    componentWillReceiveProps(nextProps) {
        if  (nextProps.submit) {
            this.setState({
                button: 'btn btn-info',
            })
        } else {
            this.setState ({
                button: 'btn btn-info disabled',
            })  
        }   
    }

    addTransaction() {
        if (this.state.button === 'btn btn-info') {
            this.props.onClick(true)
            this.setState({
                error: ''
            })
        } else {
            this.props.onClick(false)
            this.setState ({
                error: 'Fill all inputs with data'
            })
        }               
    }

    errorMessage() {
        let { error } = this.state;
        if (error === 'Fill all inputs with data') {
                return (
                    <h4 className="errorMessage">{error}</h4>
                )
        }
    }

    render() {
            return (
                    <div className='col-lg-12'>
                            <div 
                                    id="addButton" 
                                    className={this.state.button} 
                                    onClick={this.addTransaction}>
                                    Add transaction
                            </div>
                            {this.errorMessage()}
                    </div>
            )
    }   
}

export default AddButton;



