import React, {Component} from 'react';

export class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {
				incomeClassName: 'btn btn-default',
				consumptionClassName: 'btn btn-default',
				lastMonthClassName: 'btn btn-default',
				moreThanClassName: 'btn btn-default'
    };
		this.changeFilters = this.changeFilters.bind(this);
	}

	changeFilters(e, props) {
		const filterId = e.target.id;
		if (filterId === 'incomeId') {
			if (!this.props.incomeFilter) {
				this.setState({
						incomeClassName: 'btn btn-success'
				});
			} else {
				this.setState({
						incomeClassName: 'btn btn-default'
				});
			};
			this.props.onClick(!this.props.incomeFilter, this.props.consumptionFilter, 
				this.props.lastMonthFilter, this.props.moreThanFilter);
		} else if (filterId === 'consumptionId') {
			if (!this.props.consumptionFilter) {
				this.setState({
						consumptionClassName: 'btn btn-warning'
					});			
			} else {
				this.setState({
						consumptionClassName: 'btn btn-default'
				});
			};
			this.props.onClick(this.props.incomeFilter, !this.props.consumptionFilter, 
				this.props.lastMonthFilter, this.props.moreThanFilter);
		} else if (filterId === 'lastMonthId') {
			if (!this.props.lastMonthFilter) {
				this.setState({
					lastMonthClassName: 'btn btn-info'
				});
			} else {
				this.setState({
					lastMonthClassName: 'btn btn-default'
				});
			}
			this.props.onClick(this.props.incomeFilter, this.props.consumptionFilter, 
				!this.props.lastMonthFilter, this.props.moreThanFilter);
		} else if (filterId === 'moreThanFilterId') {
			if (!this.props.moreThanFilter) {
				this.setState({
					moreThanClassName: 'btn btn-primary'
				});
			} else {
				this.setState({
				moreThanClassName: 'btn btn-default'
				});
			}
			this.props.onClick(this.props.incomeFilter, this.props.consumptionFilter, 
				this.props.lastMonthFilter, !this.props.moreThanFilter);
		}		
	}

	render () {
		return (
			<div className="btn-group btn-group-justified">
				<a 
		            id = 'incomeId'
		            className = {this.state.incomeClassName}
		            onClick = {this.changeFilters}>
		            Income
		    </a>
		        <a 
		            id = 'consumptionId'
		            className = {this.state.consumptionClassName}
		            onClick = {this.changeFilters}>
		            Consumption
		        </a>
		        <a 
		            id = 'lastMonthId'
		            className = {this.state.lastMonthClassName}
		            onClick = {this.changeFilters}>
		            Last Month
		        </a>
		        <a 
		            id = 'moreThanFilterId'
		            className = {this.state.moreThanClassName}
		            onClick = {this.changeFilters}>
		            More than 1000 rub
		        </a>
		    </div>
			
				
		);
	}
   					
} 