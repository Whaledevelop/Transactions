import React, {Component} from 'react';

import FilterButton from '../components/FilterButton';

class Filter extends Component {
		componentWillMount() {
					let {name, filterBy, filterValue, filterInfo } = this.props;
					let filter= {
							name: name,
							filterOn: false,
							filterBy: filterBy,
							filterValue: filterValue,
							filterInfo: filterInfo
					};
					this.props.onAddFilter(filter);
		}

		switchFilter(filterOn) {
				this.props.onClick(this.props.name, filterOn);
		}

		informationForNaming() {
				let { filterBy, filterValue, filterInfo } = this.props;
				let filterText = {
						filterBy: filterBy,
						filterValue: filterValue,
						filterInfo: filterInfo
				}
				return filterText;
		}

		render () {
			return <FilterButton
								className = { this.props.className } 
								text = { this.informationForNaming()}
								onClick = { this.switchFilter.bind(this) }>
						</FilterButton>
		}   					
} 

export default Filter;