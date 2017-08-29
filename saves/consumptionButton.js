import React from 'react';

export class ConsumptionButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {className: 'btn btn-default'};
		this.changeColorConsumptionButton = this.changeColorConsumptionButton.bind(this);
		}
	changeColorConsumptionButton() {
		const newColorConsumptionButton = this.state.className === 'btn btn-default' ? 'btn btn-warning' : 'btn btn-default';
		this.setState({className: newColorConsumptionButton});
	}
	render() {
		return(
			<a 
			href="#"
			className={this.state.className}
			onClick={this.changeColorConsumptionButton}>Consumption</a>
		);
	}
}