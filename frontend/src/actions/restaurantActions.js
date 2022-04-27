import axios from 'axios'

import {
  RESTAURANT_DETAILS_FAIL,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS
} from '../constants/restaurantConstants'

export const listRestaurantDetails = (id) => async (dispatch) => {
  try {
    // fetching data
    dispatch({ type: RESTAURANT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/restaurants/${id}`)

    // fetch success
    dispatch({
      type: RESTAURANT_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    // fetch failed
    dispatch({
      type: RESTAURANT_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}