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
            let {className, onClick, name} = this.props;
            if (this.state.className === 'btn btn-default') {
                    this.setState({className: className})
            } else this.setState({className: 'btn btn-default'})   
            onClick(name)
    }

    render() {
        let {text} = this.props;
        return (
            <a
                    className={this.state.className}
                    onClick={this.changeColor}>
                    {text}
            </a>
        )
    }
  }


export default FilterButton