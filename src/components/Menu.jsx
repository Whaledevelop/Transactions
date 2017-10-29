import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  render() {
    let activeList = {color:'#00BDD9', borderBottom: '1px solid #fff', paddingBottom: '5px'}
    let activeAdd = {color:'#D0021B', borderBottom: '1px solid #fff', paddingBottom: '5px'}
    let header = {color:"#fff", fontWeight: 'bold'}
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-collapse">
            <ul className="nav navbar-nav">
              <li><NavLink to="/"><i className="fa fa-home" style={{fontSize: '20px'}}></i></NavLink></li>
              <li><a style={header}>Lists</a></li>
              <li><NavLink to="/transactions" activeStyle={activeList}>Transactions</NavLink></li>
              <li><NavLink to="/counterparts" activeStyle={activeList}>Counterparts</NavLink></li>
              <li><NavLink to="/filters" activeStyle={activeList}>Filters</NavLink></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a style={header}>Add</a></li>
              <li><NavLink to="/addtransaction" activeStyle={activeAdd}>Transaction</NavLink></li>
              <li><NavLink to="/addcounterpart" activeStyle={activeAdd}>Counterpart</NavLink></li>
              <li><NavLink to="/addfilter" activeStyle={activeAdd}>Filter</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Menu