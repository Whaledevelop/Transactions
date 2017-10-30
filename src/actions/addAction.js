import axios from 'axios'

export const addAction = (item, object) => {
  return (dispatch) => {
    axios.post(`http://localhost:3333/${object}`, item)
      .then(response => {
        dispatch({type: `ADD_${object.toUpperCase()}`, payload: item})
      })
      .catch(error => {
        dispatch({type: `FETCH_${object.toUpperCase()}_REJECTED`, payload: error})
      })
  }
}