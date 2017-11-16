import React, {Component} from 'react'
import NavBar from './NavBar'
import ModalContainer from '../../containers/ModalContainer'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <NavBar/>
          <ModalContainer/>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App