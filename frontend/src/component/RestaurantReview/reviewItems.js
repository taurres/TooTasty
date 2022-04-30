import React from "react"
import LetterAvatars from "../Avatar/letterAvatars"
import RatingStar from "../Rating/ratingStar"
import { useSelector, useDispatch } from "react-redux"

// import {deleteReview} from "../../actions/ReviewActions";

const ReviewItems = ({ review }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  console.log(userInfo)
  return (
    <>
      {/* <div className="review-item clearfix">
        <div className="grid-image-left">
          <LetterAvatars name={review.firstname + " " + review.lastname} />
        </div>

        <div className="name-heading">
          <strong>{review.firstname + " " + review.lastname}</strong>
          <br />
          <em>{review.time}</em>
          <i
            // onClick={() =>
            // deleteReview(dispatch, review)}
            className="fas fa-remove fa-pull-right"
          ></i>
        </div>
      </div>
      <div className="review-item-content">
        <RatingStar value={review.rating} /> */}
      <div>
        {userInfo.role == "admin" && (
          <i
            // onClick={() => deleteReview(review._id)}
            className="fas fa-remove fa-pull-right"
          ></i>
        )}
        <p>{review.comment}</p>
      </div>
    </>
  )
}

export default ReviewItems
