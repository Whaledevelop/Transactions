import React, {Component} from 'react';

import Filter from './Filter';

class FiltersContainer extends Component {
      constructor(props) {
          super(props);
          this.state = {
             filters: []
          }
          this.combineFilters = this.combineFilters.bind(this);
          this.turnFilters = this.turnFilters.bind(this);
      }

      combineFilters(filter) {
          this.setState((prevState, props) => ({
              filters: [...prevState.filters, filter]
          }))
      }

      turnFilters(name, filterOn) {
            let filters = this.state.filters;
            for (let i = 0; i < filters.length; i++) {
                if (filters[i].name === name) {
                    filters[i].filterOn = filterOn;
                }
            }
            this.props.onClick (filters);
      }
      
      render() {
         return (
          <div className="btn-group btn-group-justified">
                  <Filter 
                        onAddFilter = {this.combineFilters}  
                        onClick = {this.turnFilters}
                        className = 'btn btn-success'
                        name = 'income'
                        filterBy = 'type'
                        filterValue = 'income'
                        filterInfo = ''/>
                  <Filter 
                        onAddFilter = {this.combineFilters}
                        onClick = {this.turnFilters}
                        className = 'btn btn-warning'
                        name = 'consumption'
                        filterBy = 'type'
                        filterValue = 'consumption'
                        filterInfo = ''/>
                  <Filter 
                        onAddFilter = {this.combineFilters}
                        onClick = {this.turnFilters}
                        className = 'btn btn-info'
                        name = 'thisMonth'
                        filterBy = 'date'
                        filterValue = {30}
                        filterInfo = 'days'/> 
                  <Filter 
                        onAddFilter = {this.combineFilters}
                        onClick = {this.turnFilters}
                        className = 'btn btn-primary'
                        name = 'moreThan1000'
                        filterBy = 'value'
                        filterValue = {1000}
                        filterInfo = 'more'/>
          </div>
         )
      }
}

export default FiltersContainer;