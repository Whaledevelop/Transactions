import React, {Component} from 'react'

class FilterButton extends Component{
  constructor(props) {
    super(props);
    this.state = {
      filterOn : false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        filterOn: !prevState.filterOn
      }
    })   
    this.props.onClick(this.props.name)
  }
  
  render() {
    const className = this.state.filterOn 
      ? this.props.className : 'btn btn-default'
    return (
      <a
        style={{borderRadius: "10px 10px 0px 0px"}}
        className = {className}
        onClick={this.handleClick}>
        {this.props.name}
      </a>
    )
  }
}

export default FilterButton