export const CREATE_REVIEW = "CREATE_REVIEW"
export const FIND_ALL_REVIEW = "FIND_ALL_REVIEW"
export const UPDATE_REVIEW = "UPDATE_REVIEW"

export const createReview = async (dispatch, review) => {
  const newReview = review
  dispatch({
    type: CREATE_REVIEW,
    newReview,
  })
}

export const deleteReview = async (dispatch, reviewId) => {
  dispatch({
    type: UPDATE_REVIEW,
    reviewId,
  })
}
