import React, {Component} from 'react';

class FiltersHandler extends Component {
	constructor(props) {
      super(props);
      let defaultBtn = 'btn btn-default';
      this.state = {
          incomeClass: defaultBtn,
          consumptionClass: defaultBtn,
          thisMonthClass: defaultBtn,
          moreThan1000Class: defaultBtn	
      };
      this.changeClassName = this.changeClassName.bind(this);
  }

  changeClassName(e) {
        let currentFilter = e.target.id;
        let defaultBtn = 'btn btn-default';
        if (currentFilter === 'income') {
                if (this.state.incomeClass === defaultBtn) {
                    this.setState ({
                        incomeClass: 'btn btn-success'
                    })
                } else {
                    this.setState ({
                        incomeClass: defaultBtn
                    })
                }         
        } else if (currentFilter === 'consumption') {
                if (this.state.consumptionClass === defaultBtn) {
                    this.setState ({
                        consumptionClass: 'btn btn-warning'
                    })
                } else {
                    this.setState ({
                        consumptionClass: defaultBtn
                    })
                }
        } else if (currentFilter === 'thisMonth') {
                if (this.state.thisMonthClass === defaultBtn) {
                    this.setState ({
                        thisMonthClass: 'btn btn-info'
                    })
                } else {
                    this.setState ({
                        thisMonthClass: defaultBtn
                    })
                }
        } else if (currentFilter === 'moreThan1000') {
                if (this.state.moreThan1000Class === defaultBtn) {
                    this.setState ({
                        moreThan1000Class: 'btn btn-primary'
                    })
                } else {
                    this.setState ({
                        moreThan1000Class: defaultBtn
                    })
                }
        } 
        this.props.onClick(currentFilter);
  }

  render() {
    return (
      <div className="btn-group btn-group-justified">
          <a 
              id = 'income'
              className = {this.state.incomeClass}
              onClick = {this.changeClassName}>
              Income
          </a>
          <a 
              id = 'consumption'
              className = {this.state.consumptionClass}
              onClick = {this.changeClassName}>
              Consumption
          </a>
          <a 
              id = 'thisMonth'
              className = {this.state.thisMonthClass}
              onClick = {this.changeClassName}>
              This month
          </a>
          <a 
              id = 'moreThan1000'
              className = {this.state.moreThan1000Class}
              onClick = {this.changeClassName}>
              More than 1000 rubles
          </a>
      </div>
    )
  }
}

export default FiltersHandler;
