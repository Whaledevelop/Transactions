import React, {Component} from 'react'

import {firstLetterUpperCase} from '../../modules/firstLetterUpperCase'

class ModalsNavBar extends Component {
  handleClick(e) {
    e.preventDefault();
    this.props.onSwitchMode(e.target.name);
  }

  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a style={{color: '#fff', fontWeight: 'bold'}}>
            {this.props.label}
          </a>
        </li>
        {this.props.modals.map(modal => {
          const modalNavStyle = modal.active 
            ? {color: "#D0021B", paddingBottom: "5px", borderBottom: "1px solid  #fff"} 
            : {}
          return (
            <li key = {modal.id}>
              <a
                name ={modal.name}
                style = {modalNavStyle}
                onClick={this.handleClick.bind(this)} 
              >
                {firstLetterUpperCase(modal.name)}
              </a>
            </li>
          )  
        })}
      </ul>
    )
  }
}

export default ModalsNavBar