import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const ReviewElement = (review) => {
  return (
    <>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={`${review.restaurant.image_url}`}/>
        <Card.Body>
          <Card.Title>{review.restaurant.name}</Card.Title>
          <Card.Text>{review.text}</Card.Text>
          <Link to={`/restaurant/${review.restaurant._id}`}>
            <Button variant="primary">Learn More</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}
export default ReviewElement
