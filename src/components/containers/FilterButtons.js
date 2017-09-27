import React, {Component} from 'react';

class FilterButtons extends Component {
	constructor(props) {
      super(props);
      this.state = {
          income: {
              id: 'income',
              className: 'btn btn-default',
              value: 'Income'
          },
          consumption: {
              id: 'consumption',
              className: 'btn btn-default',
              value: 'Consumption'
          },
          thisMonth: {
              id: 'thisMonth',
              className: 'btn btn-default',
              value: 'This Month'
          },
          moreThan1000: {
              id: 'moreThan1000',
              className: 'btn btn-default',
              value: 'More than 1000 rubles'
          }		
      };
      this.changeClassName = this.changeClassName.bind(this);
  }

  changeClassName() {

  }

  render() {
    let { income, consumption, thisMonth, moreThan1000 } = this.state;
    return (
      <div className="btn-group btn-group-justified">
          <a 
              id = {income.id}
              className = {income.className}
              onClick = {this.changeClassName}>
              {income.value}
          </a>
          <a 
              id = {consumption.id}
              className = {consumption.className}
              onClick = {this.changeClassName}>
              {consumption.value}
          </a>
          <a 
              id = {thisMonth.id}
              className = {thisMonth.className}
              onClick = {this.changeClassName}>
              {thisMonth.value}
          </a>
          <a 
              id = {moreThan1000.id}
              className = {moreThan1000.className}
              onClick = {this.changeClassName}>
              {moreThan1000.value}
          </a>
      </div>
    )
  }
}

export default FilterButtons;
