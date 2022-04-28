import React from 'react'
import restaurants from '../datafornow/restaurants.json'
import TopLikedElement from './topLikedElement'
import { Row, Col } from 'react-bootstrap'

const TopLikedRes = () => {
  return (
    <>
      <div className="mt-5 m-3 flex">
        <h1 className="text-white">This is TOP liked restaurant!</h1>
      </div>
      <Row className="justify-content-md-center">
        {restaurants &&
          restaurants.map((restaurant) => (
            <Col key={restaurant._id} sm={12} md={6} lg={4} xl={3}>
              <TopLikedElement restaurant={restaurant}/>
            </Col>
          ))}
      </Row>
    </>
  )
}
export default TopLikedRes
