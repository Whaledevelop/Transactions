import React, {Component} from 'react'

class FilterButton extends Component{
  constructor(props) {
    super(props);
    this.state = {
      className: 'btn btn-default'
    }
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    let {color, onClick, id} = this.props;
    let {className} = this.state;
    if (className === 'btn btn-default') {
      if(color === 'green') {
        className='btn btn-success'
      } else if(color === 'orange') {
        className='btn btn-warning'
      } else if(color === 'lightblue') {
        className='btn btn-info'
      } else if(color === 'deepblue') {
        className='btn btn-primary'
      } else if(color === 'red') {
        className='btn btn-danger'
      }
    } else className = 'btn btn-default';
    this.setState({className: className})   
    onClick(id)
  }
  
  render() {
    return (
      <a
        style={{borderRadius: "10px 10px 0px 0px"}}
        className={this.state.className}
        onClick={this.changeColor}>
        {this.props.name}
      </a>
    )
  }
}

export default FilterButton