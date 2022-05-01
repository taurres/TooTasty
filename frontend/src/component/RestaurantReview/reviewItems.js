import React from 'react'
import LetterAvatars from '../Avatar/letterAvatars'
import RatingStar from '../Rating/ratingStar'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteReview } from '../../actions/reviewActions'

const ReviewItems = ({ review }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const deleteHandler = () => {
    dispatch(deleteReview(review.restaurant, review._id))
  }

  return (
    <>
      <div className="review-item clearfix">
        <Link to={`/tootasty/profile/${review.user}`}>
          <div className="grid-image-left">
            <LetterAvatars name={review.name}/>
          </div>
        </Link>

        <div className="name-heading">
          <Link to={`/tootasty/profile/${review.user}`}>
            <strong>{review.name}</strong>
          </Link>
          <br/>
          {userInfo && userInfo.role === 'admin' && (
            <Link to="#">
              <i
                onClick={deleteHandler}
                className="fas fa-remove fa-pull-right"
              ></i>
            </Link>
          )}
        </div>
      </div>
      <div className="review-item-content">
        <RatingStar value={review.rating}/>
        <div>
          <p>{review.comment}</p>
        </div>
      </div>
    </>
  )
}

export default ReviewItems
