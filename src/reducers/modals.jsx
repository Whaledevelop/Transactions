const initialModals = [
  {
    id: 1,
    name: 'transaction',
    action: 'add',
    active: false
  },
  {
    id: 2,
    name: 'counterpart',
    action: 'add',
    active: false
  },
  {
    id: 3,
    name: 'filter',
    action: 'add',
    active: false
  },
  {
    id: 4,
    name: 'success',
    action: 'progress',
    active: false
  }
]

export const modals = (state = initialModals, action) => {
  switch (action.type) {
    case 'SET_MODAL_MODE': {
      let newModals = Object.assign([], state);
      let modalIndex = newModals.findIndex(modal => modal.name === action.payload)
      let previousActive = newModals[modalIndex].active;
      for (let i=0; i<newModals.length; i++) {newModals[i].active = false}
      newModals[modalIndex].active = !previousActive
      return newModals
    }
    default: return state
  }
}