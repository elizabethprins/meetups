import { FETCHED_LISTDATA } from '../actions/fetch'

export default (state = null, { type, payload } = {}) => {
  switch (type) {
    case FETCHED_LISTDATA :
      return payload

    default :
      return state
  }
}
