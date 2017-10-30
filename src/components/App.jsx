import React, {Component} from 'react'
import Menu from './Menu'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Menu/>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App