import React, {Component} from 'react';
import FilterButtons from './FilterButtons';

class FiltersContainer extends Component {
		changeFilters(e, props) {
			const currentFilter = e.target.value;
			let {income, consumption, thisMonth, moreThan1000} = this.props.filters;
			if (currentFilter === 'Income') {
					income = !income;
			} else if (currentFilter === 'Consumption') {
					consumption = !consumption;
			} else if (currentFilter === 'This Month') {
					thisMonth = !thisMonth;
			} else if (currentFilter === 'More than 1000 rubles') {
					moreThan1000 = !moreThan1000;
			}
			this.props.onClick(income, consumption, thisMonth, moreThan1000);		
		}

		render () {
			return <FilterButtons onClick={this.changeFilters.bind(this)}/>;
		}   					
} 

export default FiltersContainer;