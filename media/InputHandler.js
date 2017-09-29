/*
import React, {Component} from 'react';
import moment from 'moment';

class InputHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
           valueStatus: 'empty',
           dateStatus: 'empty'
        }
    }

          
          
          let {valueStatus, dateStatus} = this.state;
          this.props.handler(valueStatus, dateStatus);
    }

    render() {
        const statusHandler = () => {
            let input = this.props;
            let {valueStatus, dateStatus} = this.state;
            if (input === 'value') {
                return <h4>{valueStatus}</h4>
            } else if (input === 'type') {
                return <h4>{this.props.type}</h4>
            } else if (input === 'date') {
                return <h4>{dateStatus}</h4>
            } else return <h5>no data</h5>
        }
        return <div>{statusHandler()}</div>      
    }
  }

  export default InputHandler;
  */