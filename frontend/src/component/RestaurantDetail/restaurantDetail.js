import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import RestaurantInfo from './restaurantInfo'
import { useParams } from 'react-router-dom'
import { listRestaurantDetails } from '../../actions/restaurantActions'


const RestaurantDetail = () => {
  const dispatch = useDispatch()

  const restaurantId = useParams().id

  const restaurantDetails = useSelector(state => state.restaurantDetails)
  const { restaurant } = restaurantDetails


  useEffect(() => {
    if (!restaurant) {
      dispatch(listRestaurantDetails(restaurantId))
    }
  }, [dispatch, restaurantId])

  return (
    <>
      <section className="header height-auto">
        <div className="container ps-0 pe-0">
          <div className="row">
            {restaurant && <RestaurantInfo restaurantInfo={restaurant}/>}
          </div>
        </div>
      </section>
    </>

  )
}

export default RestaurantDetail

