import React, {Component} from 'react';

class FilterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
                className: 'btn btn-default'
        }
    }

    changeFilter() {
        if (this.state.className === 'btn btn-default') {
                let newClassName = this.props.className;					
                this.setState ({
                        className: newClassName
                })
                let filterOn = true;
                this.props.onClick (filterOn);
                
        } else {
                this.setState ({
                        className: 'btn btn-default'
                })
                let filterOn = false
                this.props.onClick (filterOn);
        }
    }

    raiseFirstLetter(name) {
        let raisedFirstLetter = name[0].toUpperCase();
        let cutName = name.slice(1, name.length);
        return name = raisedFirstLetter + cutName;
    }

    namingFilter () {
            let { filterBy, filterValue, filterInfo } = this.props.text;
            if (filterBy === 'type') {
                return this.raiseFirstLetter(filterValue);
            } else if (filterBy === 'date') {
                if ((filterValue === 30 & filterInfo === 'days') || (filterValue === '1' & filterInfo === 'month')) {
                        return 'This month';
                } else {
                        return ('Past ' + filterValue + ' ' + filterInfo);
                }
            } else if (filterBy === 'value') {
                return (this.raiseFirstLetter(filterInfo) + ' than ' + filterValue + ' rubles');
            }
    }
    
    render (){
      return (
        <a 
            className = { this.state.className } 
            onClick = {this.changeFilter.bind(this)}>
            { this.namingFilter() }
        </a>
      )
          
    }
}

export default FilterButton ;