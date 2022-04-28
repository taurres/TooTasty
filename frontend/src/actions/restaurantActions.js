import axios from 'axios'

import {
  RESTAURANT_DETAILS_FAIL,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
  YELP_RESTAURANT_SAVE_FAIL,
  YELP_RESTAURANT_SAVE_REQUEST,
  YELP_RESTAURANT_SAVE_RESET,
  YELP_RESTAURANT_SAVE_SUCCESS
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

export const saveYelpRestaurant = (restaurant) => async (dispatch) => {
  try {
    // fetching data
    dispatch({ type: YELP_RESTAURANT_SAVE_REQUEST })
    const { data } = await axios.put('/api/yelp/restaurants', restaurant)

    // fetch success
    dispatch({
      type: YELP_RESTAURANT_SAVE_SUCCESS,
      payload: data
    })

    // reset restaurant details state
    // dispatch({ type: RESTAURANT_DETAILS_RESET })

  } catch (error) {
    // fetch failed
    dispatch({
      type: YELP_RESTAURANT_SAVE_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const resetSaveYelpRestaurant = () => async (dispatch) => {
  dispatch({ type: YELP_RESTAURANT_SAVE_RESET })
}