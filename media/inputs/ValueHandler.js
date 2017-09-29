import React, {Component} from 'react';

class ValueHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueStatus: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        let value = nextProps.value;
        console.log('value ', value);
        let parsedValue = parseInt(value, 10);
        if (value === '') {
            this.setState({
                valueStatus: 'empty'
            })
        } else if (isNaN(parsedValue)) {
            this.setState({
                valueStatus: 'Please, enter numbers. "Value" is about how much transcaction was'
            })
        } else if (parsedValue < 0) {
            this.setState({
                valueStatus: 'Enter positive number. If you want specify expencies, select "consumption" in type input' 
            })
        } else if (parsedValue > 1000000000) {
            this.setState({
                valueStatus: 'Wow wow wow, it\'s too much, stop, you are not a billionaire. Enter correct value'
            })
        } else {
            this.setState({
                valueStatus: 'correct'
            })
        }
    }

    componentDidUpdate(nextState) {
        let valueStatus = nextState.valueStatus;
        //this.props.handler(valueStatus);
    }

    render() {
        return <h4>{this.state.valueStatus}</h4>
    }
}

export default ValueHandler;