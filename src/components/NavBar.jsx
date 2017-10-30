import React, {Component} from 'react'
import { NavLink } from 'react-router-dom'
import ModalsNavContainer from '../containers/ModalsNavContainer'

class NavBar extends Component {
  render() {
    let activeList = {color:'#00BDD9', borderBottom: '1px solid #fff', paddingBottom: '5px'}
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-collapse">
            <ul className="nav navbar-nav">
              <li><NavLink to="/"><i className="fa fa-home" style={{fontSize: '20px'}}></i></NavLink></li>
              <li><a style={{color: '#fff', fontWeight: 'bold'}}>Lists</a></li>
              <li><NavLink to="/transactions" activeStyle={activeList}>Transactions</NavLink></li>
              <li><NavLink to="/counterparts" activeStyle={activeList}>Counterparts</NavLink></li>
              <li><NavLink to="/filters" activeStyle={activeList}>Filters</NavLink></li>
            </ul>
            <ModalsNavContainer/>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar