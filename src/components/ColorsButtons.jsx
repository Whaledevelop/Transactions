import React, {Component} from 'react';

class ColorsButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttons: []
    }
    this.changeColor = this.changeColor.bind(this)
  }

  componentWillMount() {
    let {colors} = this.props
    let colorsObj = []; 
    for (let i = 0; i < colors.length; i++) {
      let className = ''
      if (colors[i] === 'red') {
        className = 'btn btn-danger'
      } else if (colors[i] === 'orange') {
        className = 'btn btn-warning'
      } else if (colors[i] === 'lightblue') {
        className = 'btn btn-info'
      } else if (colors[i] === 'deepblue') {
        className = 'btn btn-primary'
      } else if (colors[i] === 'green') {
        className = 'btn btn-success'
      }
      let color = {
        on: false,
        className: className,
        name: colors[i]
      }
      colorsObj.push(color);
    }  
    this.setState({
      buttons: colorsObj
    })
  }

  changeColor(e) {
    let color = e.target.name;
    let {buttons} = this.state;
    let currentButton = buttons.find(button => button.name === color);
    let currentButtonIndex = buttons.indexOf(currentButton);
    let beforeOn = currentButton.on;
    for (let i=0; i<buttons.length; i++) {buttons[i].on = false}
    buttons[currentButtonIndex].on = !beforeOn;
    this.props.onClick(buttons[currentButtonIndex])
    this.setState({
      buttons: buttons
    })
  }

  classNameHandler(on, className) {
    if (on) {return className
    } else return 'btn btn-default'
  }

  render() {
    let {buttons} = this.state;
    return (
    <div className='btn-toolbar'>
      <div className="btn-group">
        {buttons.map((button, i) => {
          let {on, className, name} = button;
          return (
            <a
              key={"button_" + i}
              name={name}
              style={{
                borderRadius:0,
                width: '50px',
                height: '50px',
                lineHeight: '50px'}}
              className={this.classNameHandler(on, className)}
              onClick={this.changeColor}>
              {name}
            </a>
          ) 
        })} 
      </div>
    </div>
    )
  }
}

export default ColorsButtons