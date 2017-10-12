import React, { Component } from 'react';

class InputStatus extends Component {
      statusHandler() {
            const { input, valueStatus, typeStatus, dateStatus } = this.props;
            if (input === 'value') {
                return valueStatus;
            } else if (input === 'type') {
                return typeStatus;
            } else if (input === 'date') {
                return dateStatus;
            } else return 'no data';
        }

      render() {
          return <div className="inputHandler">
                      <h4>{ this.statusHandler()  }</h4>
                  </div>
      }
}

export default InputStatus;

    