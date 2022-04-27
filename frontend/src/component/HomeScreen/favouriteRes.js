import React from 'react'
import FavouriteResElement from './favouriteResElement'

const FavouriteRes = ({ restaurants }) => {
  return (
    <>
      <div className="mt-5 m-3 ">
        <h1 className="text-white">You Liked restaurant</h1>
      </div>

      <div className=" p-2">
        <ul className="list-group">
          {restaurants && restaurants.map(
            restaurant => <FavouriteResElement restaurant={restaurant}/>
          )}
        </ul>
      </div>
    </>
  )
}
export default FavouriteRes