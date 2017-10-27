import React,{Component} from 'react';
import axios from 'axios'

import FilterButton from '../components/FilterButton';

import { camelNameCrafter } from '../components/modules/camelNameCrafter';

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
        let filters = response.data;
        for (let i = 0; i < filters.length; i++) {
          filters[i]['active'] = 'false';
          filters[i]['text'] = filters[i].name;
          filters[i].name = camelNameCrafter(filters[i].name);
        }
        this.setState({
        filters: filters
        })
      })
      .catch(error => {console.log('Error in getting json' + error)})
  }

  turnFilter(name, active) {
    let { filters } = this.state;
    for (let i = 0; i < filters.length; i++) {
      if (filters[i].name === name) {
        filters[i].active = active
      }
    }
    this.props.onClick (filters);
  }

  render () {
    let {filters} = this.state;
    return (
      <div className="btn-group btn-group-justified">
        {filters.map((filter, i) => {
          let {name, className, text} = filter;
          return (
            <FilterButton
              key = {"filter_" + i}
              name = {name}
              className = {className}
              text = {text}
              onClick = {this.turnFilter}/>
          )
        })}
      </div>
    )
  }
}

export default Filters;