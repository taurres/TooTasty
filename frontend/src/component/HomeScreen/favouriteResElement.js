import React from 'react'
import { Link } from 'react-router-dom'

const FavouriteResElement = ({ restaurant }) => {
  
  return (
    <>
      <Link to="#">
        <li className="text-white d-flex justify-content-between align-items-center">
          <div className="homepage-list-child row">
            <div className="col-12 col-md-6 ">
              <img src={restaurant.image_url} alt=""/>
            </div>
            <div className="col-12 col-md-6 ">
              <h2>{restaurant.name}</h2>
            </div>
          </div>
          <span><p><i className="fa-solid fa-heart"/> {restaurant.liked} likes</p></span>
        </li>
      </Link>
    </>
  )
}
export default FavouriteResElement