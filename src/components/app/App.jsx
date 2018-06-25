import React from 'react'

import '../../css/bootstrap.css'
import '../../css/app.css'

import NavBar from './NavBar'
import ModalContainer from '../../containers/ModalContainer'

const App = ({ children }) => (
  <div className="container">
    <div className="row">
      <NavBar/>
      <ModalContainer/>
      {children}
    </div>
  </div>
)

export default App