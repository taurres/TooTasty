import React from 'react'
import FavouriteResElement from './favouriteResElement'
import { Row, Col } from 'react-bootstrap'

const FavouriteRes = ({ restaurants }) => {
  return (
    <>
      <div className="mt-5 m-3 ">
        <h1 className="text-white">You Liked restaurant</h1>
      </div>
      <Row className="justify-content-md-center">
        {restaurants &&
          restaurants.map((restaurant) => (
            <Col key={restaurant._id} sm={12} md={6} lg={4} xl={3}>
              <FavouriteResElement restaurant={restaurant}/>
            </Col>
          ))}
      </Row>
    </>
  )
}
export default FavouriteRes