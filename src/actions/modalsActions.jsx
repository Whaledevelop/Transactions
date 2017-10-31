export const turnAddModal = (id) => {
  return {
    type: "SET_ADD_MODAL_MODE",
    payload: id
  }
}

export const turnProgressModal = (name) => {
  return {
    type: "SET_PROGRESS_MODAL_MODE",
    payload: name
  }
}