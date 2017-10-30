import axios from 'axios'

export const fetchAction = (object) => {
  return (dispatch) => {
      axios.get(`http://localhost:3333/${object}`)
        .then(response => {
          dispatch({type: `FETCH_${object.toUpperCase()}_FULFILLED`, payload: response.data})
        })
        .catch(error => {
          dispatch({type: `FETCH_${object.toUpperCase()}_REJECTED`, payload: error})
        })
    }
}