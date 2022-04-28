import restaurants from '../data/restaurant.json'
import {
  RESTAURANT_DETAILS_FAIL,
  RESTAURANT_DETAILS_REQUEST, RESTAURANT_DETAILS_RESET,
  RESTAURANT_DETAILS_SUCCESS,
  YELP_RESTAURANT_SAVE_FAIL,
  YELP_RESTAURANT_SAVE_REQUEST,
  YELP_RESTAURANT_SAVE_RESET,
  YELP_RESTAURANT_SAVE_SUCCESS
} from '../constants/restaurantConstants'

export const restaurantReducer = (state = restaurants, action) => {
  switch (action.type) {
    case 'find-restaurant':
      return state
    case 'like-restaurant':
      return state.map(restaurant => {
        if (restaurant._id === action.restaurant._id) {
          if (restaurant.liked === true) {
            restaurant.liked = false
            restaurant.stats.numLikes--
          } else {
            restaurant.liked = true
            restaurant.stats.numLikes++
          }
          return restaurant
        } else {
          return restaurant
        }
      })

    default:
      return restaurants
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