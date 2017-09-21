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
<<<<<<< HEAD
		const filterId = e.target.id;
		if (filterId === 'incomeId') {
			if (!this.props.filters.incomeFilter) {
=======
		const currentFilterId = e.target.id;
		if (currentFilterId === 'incomeFilterId') {
			if (!this.props.incomeFilter) {
>>>>>>> master
				this.setState({
					currentIncomeClassName: 'btn btn-success'
				});
				this.props.onClick(true, this.props.consumptionFilter, this.props.lastMonthFilter, this.props.moreThanThousandRubFilter);
			} else {
				this.setState({
				currentIncomeClassName: 'btn btn-default'
				});
				this.props.onClick(false, this.props.consumptionFilter, this.props.lastMonthFilter, this.props.moreThanThousandRubFilter);
			};
<<<<<<< HEAD
			this.props.onClick();
		} else if (filterId === 'consumptionId') {
=======
		} else if (currentFilterId === 'consumptionFilterId') {
>>>>>>> master
			if (!this.props.consumptionFilter) {
				this.setState({
						currentConsumptionClassName: 'btn btn-warning'
					});
				this.props.onClick(this.props.incomeFilter, true, this.props.lastMonthFilter, this.props.moreThanThousandRubFilter);
			} else {
				this.setState({
				currentConsumptionClassName: 'btn btn-default'
				});
				this.props.onClick(this.props.incomeFilter, false, this.props.lastMonthFilter, this.props.moreThanThousandRubFilter);
			};
<<<<<<< HEAD
			this.props.onClick();
		} else if (filterId === 'lastMonthId') {
=======
		} else if (currentFilterId === 'lastMonthFilterId') {
>>>>>>> master
			if (!this.props.lastMonthFilter) {
				this.setState({
					currentLastMonthClassName: 'btn btn-info'
				});
				this.props.onClick(this.props.incomeFilter, this.props.consumptionFilter, true, this.props.moreThanThousandRubFilter);
			} else {
				this.setState({
				currentLastMonthClassName: 'btn btn-default'
				});
				this.props.onClick(this.props.incomeFilter, this.props.consumptionFilter, false, this.props.moreThanThousandRubFilter);
			}
<<<<<<< HEAD
			this.props.onClick();
		} else if (filterId === 'moreThanFilterId') {
			if (!this.props.moreThanFilter) {
=======
		} else if (currentFilterId === 'moreThanThousandRubFilterId') {
			if (!this.props.moreThanThousandRubFilter) {
>>>>>>> master
				this.setState({
					currentMoreThanThousandRubClassName: 'btn btn-primary'
				});
				this.props.onClick(this.props.incomeFilter, this.props.consumptionFilter, this.props.lastMonthFilter, true);	
			} else {
				this.setState({
				currentMoreThanThousandRubClassName: 'btn btn-default'
				});
				this.props.onClick(this.props.incomeFilter, this.props.consumptionFilter, this.props.lastMonthFilter, false);
			}
<<<<<<< HEAD
			this.props.onClick();
=======
>>>>>>> master
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