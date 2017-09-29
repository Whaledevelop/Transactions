import React, {Component} from 'react';
import FilterButtons from './FilterButtons';

class FiltersContainer extends Component {
		constructor(props) {
			 super(props);
			 this.changeFilters = this.changeFilters.bind(this);
		}

		changeFilters(currentFilter) {
				let {income, consumption, thisMonth, moreThan1000} = this.props.filters;
				if (currentFilter === 'income') {
						income = !income;
				} else if (currentFilter === 'consumption') {
						consumption = !consumption;
				} else if (currentFilter === 'thisMonth') {
						thisMonth = !thisMonth;
				} else if (currentFilter === 'moreThan1000') {
						moreThan1000 = !moreThan1000;
				}
				this.props.onClick(income, consumption, thisMonth, moreThan1000);		
		}

		render () {
			return <FilterButtons onClick={this.changeFilters}/>;
		}   					
} 

export default FiltersContainer;