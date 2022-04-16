import {
    DELETE_REVIEW,
}
    from "../actions/ReviewActions";

const reviewReducer = (state = [], action) => {
    switch (action.type) {
        case DELETE_REVIEW:
            return state.filter(
                review => review._id !== action.review._id);
        default:
            return state;
    }
}

export default reviewReducer;
