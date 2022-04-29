import React from 'react'
import { Link } from 'react-router-dom'

const TopLikedElement = ({ restaurant }) => {
  return (
    <>
      <div className="m-3 col-12 col-md-3">
        <Link to={`/tootasty/restaurant/${restaurant._id}`}>
          <div className="card homepage-card-img">
            <img
              src={restaurant.image_url}
              alt="restaurant_image_url"
              height="190px"
              width="350px"
            />

            {/* <div className="text flex-column align-items-start p-2 col-md-8">
              <h2>{restaurant.name}</h2>
              <p>
                <i className="fa-solid fa-star" />
                {restaurant.rating}
              </p>
              <p>{restaurant.address}</p>
              <p>
                <i className="fa-solid fa-heart" /> liked by 99 users
              </p>
            </div> */}
            <div>{restaurant.name}</div>
          </div>
        </Link>
      </div>
    </>
  )
}
export default TopLikedElement
