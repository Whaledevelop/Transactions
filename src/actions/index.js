import axios from 'axios'

export const add = (item, object) => {
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

export const fetch = (object) => {
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

  export const setMode = (name, object) => {
    return {
      type: `SET_${object.toUpperCase()}_MODE`,
      payload: name
    }
  }