import React from 'react';


export class FilterButton extends React.Component {
	constructor(props) {
		super(props);
		this.changeClassName = this.changeClassName.bind(this);
	}

	changeClassName(props){
		this.props.onClick(this.props.className);
	}

	render() {
		return (<a 
		            href="#"
		            className = {this.props.className}
		            onClick  = {this.changeClassName}>
		                	{this.props.text}
		        </a>
		)

	}
}
				