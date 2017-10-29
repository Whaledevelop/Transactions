import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
  onNavigate
  render() {
    let active = {color:'#00BDD9', borderBottom: '1px solid #fff', paddingBottom: '5px'};
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><NavLink to="/transactions" activeStyle={active}>Transactions</NavLink></li>
              <li><NavLink to="/counterparts" activeStyle={active}>Counterparts</NavLink></li>
              <li><NavLink to="/filters" activeStyle={active}>Filters</NavLink></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
					      <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                  Add 
                  <span className="caret"></span>
                </a>
					      <ul className="dropdown-menu" role="menu">
                  <li><a>Transaction</a></li>
                  <li><a>Counterpart</a></li>
                  <li><a>Filter</a></li>
					      </ul>
				      </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

export default Menu