import restaurants from '../data/restaurant.json'
import {
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
  RESTAURANT_LIST_FAIL,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
  RESTAURANT_DETAILS_FAIL,
  RESTAURANT_RECENT_REVIEWED_REQUEST,
  RESTAURANT_RECENT_REVIEWED_SUCCESS,
  RESTAURANT_RECENT_REVIEWED_FAIL,
  RESTAURANT_DETAILS_RESET,
  YELP_RESTAURANT_SAVE_FAIL,
  YELP_RESTAURANT_SAVE_REQUEST,
  YELP_RESTAURANT_SAVE_RESET,
  YELP_RESTAURANT_SAVE_SUCCESS
} from '../constants/restaurantConstants'

export const restaurantListReducer = (state = { restartants: [] }, action) => {
  switch (action.type) {
    case RESTAURANT_LIST_REQUEST:
      return { loading: true, restartants: [] }
    case RESTAURANT_LIST_SUCCESS:
      return { loading: false, restaurants: action.payload }
    case RESTAURANT_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const restaurantDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case RESTAURANT_DETAILS_REQUEST:
      return { loading: true }
    case RESTAURANT_DETAILS_SUCCESS:
      return { loading: false, restaurant: action.payload }
    case RESTAURANT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    case RESTAURANT_DETAILS_RESET:
      return {}
    default:
      return state
  }
}

export const saveYelpRestaurantReducer = (state = {}, action) => {
  switch (action.type) {
    case YELP_RESTAURANT_SAVE_REQUEST:
      return { loading: true }
    case YELP_RESTAURANT_SAVE_SUCCESS:
      return { loading: false, restaurant: action.payload }
    case YELP_RESTAURANT_SAVE_FAIL:
      return { loading: false, error: action.payload }
    case YELP_RESTAURANT_SAVE_RESET:
      return {}
    default:
      return state
  }
}

export const restaurantRencentReviewedReducer = (
  state = { restaurants: [] },
  action
) => {
  switch (action.type) {
    case RESTAURANT_RECENT_REVIEWED_REQUEST:
      return { loading: true, restaurants: [] }
    case RESTAURANT_RECENT_REVIEWED_SUCCESS:
      return { loading: false, restaurants: action.payload }
    case RESTAURANT_RECENT_REVIEWED_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
