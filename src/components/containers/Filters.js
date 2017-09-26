import React, {Component} from 'react';

export class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {
				currentIncomeClassName: 'btn btn-default',
				currentConsumptionClassName: 'btn btn-default',
				currentLastMonthClassName: 'btn btn-default',
				currentMoreThanThousandRubClassName: 'btn btn-default'
    };

		this.changeFilters = this.changeFilters.bind(this);
	}

	changeFilters(e, props) {
		const currentFilterId = e.target.id;
		let {income, consumption, thisMonth, moreThan1000} = this.props.filters;
		if (currentFilterId === 'incomeFilterId') {
			if (!income) {
				this.setState({
					currentIncomeClassName: 'btn btn-success'
				});
				this.props.onClick(true, consumption, thisMonth, moreThan1000);
			} else {
				this.setState({
				currentIncomeClassName: 'btn btn-default'
				});
				this.props.onClick(false, consumption, thisMonth, moreThan1000);
			};
		} else if (currentFilterId === 'consumptionFilterId') {
			if (!consumption) {
				this.setState({
						currentConsumptionClassName: 'btn btn-warning'
					});
				this.props.onClick(income, true, thisMonth, moreThan1000);
			} else {
				this.setState({
				currentConsumptionClassName: 'btn btn-default'
				});
				this.props.onClick(income, false, thisMonth, moreThan1000);
			};
		} else if (currentFilterId === 'lastMonthFilterId') {
			if (!thisMonth) {
				this.setState({
					currentLastMonthClassName: 'btn btn-info'
				});
				this.props.onClick(income, consumption, true, moreThan1000);
			} else {
				this.setState({
				currentLastMonthClassName: 'btn btn-default'
				});
				this.props.onClick(income, consumption, false, moreThan1000);
			}
		} else if (currentFilterId === 'moreThanThousandRubFilterId') {
			if (!moreThan1000) {
				this.setState({
					currentMoreThanThousandRubClassName: 'btn btn-primary'
				});
				this.props.onClick(income, consumption, thisMonth, true);	
			} else {
				this.setState({
				currentMoreThanThousandRubClassName: 'btn btn-default'
				});
				this.props.onClick(income, consumption, thisMonth, false);
			}
		}		
	}

	render () {
		return (
			<div className="btn-group btn-group-justified">
				<a 
		            id = 'incomeFilterId'
		            className = {this.state.currentIncomeClassName}
		            onClick = {this.changeFilters}>
		            Income
		    </a>
		        <a 
		            id = 'consumptionFilterId'
		            className = {this.state.currentConsumptionClassName}
		            onClick = {this.changeFilters}>
		            Consumption
		        </a>
		        <a 
		            id = 'lastMonthFilterId'
		            className = {this.state.currentLastMonthClassName}
		            onClick = {this.changeFilters}>
		            Last Month
		        </a>
		        <a 
		            id = 'moreThanThousandRubFilterId'
		            className = {this.state.currentMoreThanThousandRubClassName}
		            onClick = {this.changeFilters}>
		            More than 1000 rub
		        </a>
		    </div>
			
				
		);
	}   					
} 

export default Filters;