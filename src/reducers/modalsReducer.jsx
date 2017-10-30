const initialModals = [
  {
    id: 1,
    name: 'Transaction',
    action: 'add',
    active: false
  },
  {
    id: 2,
    name: 'Counterpart',
    action: 'add',
    active: false
  },
  {
    id: 3,
    name: 'Filter',
    action: 'add',
    active: false
  }
]

export const modals = (state = initialModals, action) => {
  switch (action.type) {
    case 'SET_MODAL_MODE': {
      let newModals = Object.assign([], state)
      let modalIndex = newModals.findIndex(modal => modal.id === parseInt(action.payload, 10))
      let previousActive = newModals[modalIndex].active;
      for (let i=0; i<newModals.length; i++) {newModals[i].active = false}
      newModals[modalIndex].active = !previousActive
      return newModals
    }
    default: return state
  }
}