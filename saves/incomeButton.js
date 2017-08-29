import React from 'react';

export class IncomeButton extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {className: 'btn btn-default'};
		this.changeColorIncomeButton = this.changeColorIncomeButton.bind(this);
		}
	changeColorIncomeButton() {
		const newColorIncomeButton = this.state.className === 'btn btn-default' ? 'btn btn-success' : 'btn btn-default';
		this.setState({className: newColorIncomeButton});
	}
	render() {
		return(
			<a 
			href="#"
			className={this.state.className}
			onClick={this.changeColorIncomeButton}>Income</a>
		);
	}
}
