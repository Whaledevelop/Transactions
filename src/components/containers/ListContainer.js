import React, {Component} from 'react';

import FiltersContainer from './FiltersContainer';
import FilterList from './FilterList';

class ListContainer extends Component {
  constructor(props) {
  super(props);
  this.state = {
        filters: {
          income: false,
          consumption: false,
          thisMonth: false,
          moreThan1000: false
        }              
    }
    this.handleFilters = this.handleFilters.bind(this);
  }

  handleFilters(newIncome, newConsumption, newThisMonth, newMoreThan1000) {
      this.setState({
      filters: {
          income: newIncome,
          consumption: newConsumption,
          thisMonth: newThisMonth,
          moreThan1000: newMoreThan1000
        }     
      });
  }

  render () {
   return (
      <div className="container">
          <div className="col-md-12 col-lg-12">
              <FiltersContainer onClick={this.handleFilters} filters={this.state.filters}/>   
              <FilterList filters={this.state.filters}/>        
          </div>
      </div>
    );
  }
}

export default ListContainer;