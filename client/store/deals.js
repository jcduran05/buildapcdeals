import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_DEALS = 'GET_DEALS'

/**
 * INITIAL STATE
 */
const defaultDeals = []

/**
 * ACTION CREATORS
 */
const getDeals = deals => ({type: GET_DEALS, deals})

/**
 * THUNK CREATORS
 */
export const deals = () =>
  dispatch =>
    axios.get('/api/deals')
      .then(res =>
        dispatch(getDeals(res.data || defaultDeals)))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = defaultDeals, action) {
  switch (action.type) {
    case GET_DEALS:
      return action.deals
    default:
      return state
  }
}
