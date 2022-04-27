import './restaurant.css'
import React from 'react'
import RestaurantDetail from '../RestaurantDetail/restaurantDetail'
import RestaurantReview from '../RestaurantReview/restaurantReview'

const RestaurantScreen = () => {

  return (
    <>
      <RestaurantDetail/>
      <RestaurantReview/>
    </>
  )
}

export default RestaurantScreen
