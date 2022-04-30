// import ReviewRating from "./reviewRating";
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import Rating from "@mui/material/Rating"
import Typography from "@mui/material/Typography"
import { createRestaurantReview } from "../../actions/restaurantActions"
// import { RESTAURANT_CREATE_REVIEW_RESET } from "../../constants/restaurantConstants"

const WriteReview = () => {
  const { id: restaurantId } = useParams()
  let [comment, setComment] = useState("")
  let [rating, setRating] = useState(0)

  const dispatch = useDispatch()
  const reviewHandler = (e) => {
    e.preventDefault()
    dispatch(
      createRestaurantReview(restaurantId, {
        rating,
        comment,
      })
    )
  }

  return (
    <>
      <form action="#" className="reviews-form" role="form">
        <h2 id="writeReview" name="writeReview">
          Write a review
        </h2>
        <div className="form-group">
          <label htmlFor="review">
            Review <span className="require"></span>
          </label>
          <textarea
            className="form-control"
            rows="8"
            id="review"
            value={comment}
            placeholder="Write your review"
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
        </div>
        <Typography component="legend">Rating</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(e) => {
            setRating(parseInt(e.target.value))
          }}
        />

        <div className="padding-top-20">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={reviewHandler}
          >
            Send
          </button>
        </div>
      </form>
    </>
  )
}

export default WriteReview
