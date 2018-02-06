import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from './loading'

import { api } from '../config'

export const FETCHED_LISTDATA = 'FETCHED_LISTDATA'

export default () => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    fetch(api, { method: 'GET' })
    .then(response => response.json())
    .then((json) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({ type: LOAD_SUCCESS })

      dispatch({
        type: FETCHED_LISTDATA,
        payload: json
      })
    })
    .catch((error) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({
        type: LOAD_ERROR,
        payload: error.message
      })
    })
  }
}
