import React, {Component} from 'react';

class ColorsButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: this.props.input.buttons.map(button => {
        button.active = false
        return button
      })
    }
    this.selectColor = this.selectColor.bind(this)
  }

  selectColor(e) {
    const buttons = this.state.buttons.map(button => {
      if (button.color === e.target.name ) {
        button.active = !button.active;
        const info = button.active ? "correct" : ""
        const addValuesObj = {
          color: button.color,
          className: button.className
        }
        this.props.onClick( addValuesObj, {color: info})
      } else {
        button.active = false
      }
      return button
    })
    this.setState({
      buttons: buttons
    })
  }

  render() {
    const buttonStyle = {
      borderRadius:0,
      width: '56px',
      height: '55px',
      lineHeight: '50px'
    }
    return (
      <div className='btn-toolbar'>
        <div className="btn-group">
          {this.state.buttons.map((button, i) => {
            let {active, className, color} = button;
            return (
              <a
                key={i}
                name={color}
                style={buttonStyle}
                className= {active ? className : 'btn btn-default'}
                onClick = {this.selectColor}
              >
                {color}
              </a>
            ) 
          })} 
        </div>
      </div>
    )
  }
}

export default ColorsButtons