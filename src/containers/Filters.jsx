import React,{Component} from 'react';
import axios from 'axios'

import FilterButton from '../components/FilterButton';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: []
        }
        this.turnFilter = this.turnFilter.bind(this);
    }
    componentWillMount() {
        axios.get('http://localhost:3333/filters')
                .then(response => {
                        this.setState({
                            filters: response.data
                        })
                })
                .catch(error => {
                        console.log('Error in getting json' + error);
                });
    }

    turnFilter(name, active) {
        let filters = this.state.filters;
        for (let i = 0; i < filters.length; i++) {
            if (filters[i].name === name) {
                filters[i].active = active;
            }
        }
        this.props.onClick (filters);
    }
    
    render () {
        let {filters} = this.state
        return (
          <div className="btn-group btn-group-justified">
              {filters.map(filter => {
                  return (
                      <FilterButton
                          className={filter.className}
                          text={filter.text}
                          name={filter.name}
                          onClick={this.turnFilter}/>
                  )
              })}
          </div>
        )
    }
}

export default Filters;