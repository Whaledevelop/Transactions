import React, {Component} from 'react';
import FiltersHandler from './FiltersHandler';

class FiltersContainer extends Component {
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
			return <FiltersHandler onClick={this.changeFilters.bind(this)}/>;
		}   					
} 

export default FiltersContainer;