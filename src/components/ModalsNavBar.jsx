import React, {Component} from 'react'

class ModalsNavBar extends Component {
  modalStyle(active) {
    if (active) {
      return ({color: '#D0021B', paddingBottom: '5px', borderBottom: '1px solid #fff'})
    } else return {}
  }

  render() {
    let {onClick, modals} = this.props;
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><a style={{color: '#fff', fontWeight: 'bold'}}>Add</a></li>
        {modals.map(modal => {
          return (
            <li key = {modal.id}>
              <a
                id={modal.id}
                onClick={e => onClick(e.target.id)} 
                style={this.modalStyle(modal.active)}>
                {modal.name}
              </a>
            </li>
          )  
        })}
      </ul>
    )
  }
}

export default ModalsNavBar