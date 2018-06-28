const initialModals = [
  {id: 1, name: 'transaction', action: 'add', active: false},
  {id: 2, name: 'counterpart', action: 'add', active: false},
  {id: 3, name: 'filter', action: 'add', active: false},
  {id: 4, name: 'success', action: 'progress', active: false}
]

export const modals = (state = initialModals, action) => {
  switch (action.type) {
    case 'SET_MODAL_MODE': {
      const modals = state.map(modal => {
        modal.active = modal.name === action.payload
          ? !modal.active 
          : false
        return modal
      })
      return Object.assign([], modals)
    }
    default: return state
  }
}