import React, { useEffect } from 'react'
import './restaurant.css'
import RestaurantDetail from '../RestaurantDetail/restaurantDetail'
import RestaurantReview from '../RestaurantReview/restaurantReview'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { listRestaurantDetails } from '../../actions/restaurantActions'

const RestaurantScreen = () => {
  const dispatch = useDispatch()

  const restaurantId = useParams().id

  const restaurantDetails = useSelector(state => state.restaurantDetails)
  const { restaurant } = restaurantDetails

  useEffect(() => {
    dispatch(listRestaurantDetails(restaurantId))

  }, [dispatch, restaurantId])

  return (
    <>
      <RestaurantDetail restaurant={restaurant}/>
      <RestaurantReview/>
    </>
  )
}

export default RestaurantScreen
