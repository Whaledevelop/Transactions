import React, {Component} from 'react';

class TypeHandler extends Component {
    constructor(props) {
       super(props);
       this.state = {
         typeStatus: ''
       }
    }

    componentWillReceiverProps(nextProps) {
       let type = nextProps.type;
       let newTypeStatus = this.state.typeStatus;
       if (type === '') {
          newTypeStatus = 'empty'
       } else if (type === 'income' || type === 'consumption') {
          newTypeStatus = 'correct'
       }
    }

    componentDidUpdate(nextState) {
       let typeStatus = nextState.typeStatus;
       //this.props.handler(typeStatus);
    }
    
    render () {
      return <h4>{this.state.typeStatus}</h4>
    }
}

export default TypeHandler;