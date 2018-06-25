import React from 'react'

import {firstLetterUpperCase} from '../../modules/functional/firstLetterUpperCase'

const ModalsNavBar = ({ onClick, modals}) => {
  let addingModals = modals.filter(modal => modal.action === 'add');
  return (
    <ul className="nav navbar-nav navbar-right">
      <li>
        <a style={{color: '#fff', fontWeight: 'bold'}}>
          Add
        </a>
      </li>
      {addingModals.map(modal => {
        const modalNavStyle = modal.active 
          ? {color: "#D0021B", paddingBottom: "5px", 
          borderBottom: "1px solid  #fff"} : {}
        return (
          <li key = {modal.id}>
            <a
              name ={modal.name}
              style = {modalNavStyle}
              onClick={e => {
                e.preventDefault();
                onClick(e.target.name);
              }} 
            >
              {firstLetterUpperCase(modal.name)}
            </a>
          </li>
        )  
      })}
    </ul>
  )
}

export default ModalsNavBar