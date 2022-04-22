export const CREATE_REVIEW = 'CREATE_REVIEW';
export const FIND_ALL_REVIEW = 'FIND_ALL_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';

export const createReview = async (dispatch, review) => {
    // review = {
    //     "_id": "1",
    //     "username": "Bob Smith",
    //     "time": "04/15/2022",
    //     "review": "Sed velit quam, auctor id semper a, hendrerit eget justo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vel arcu pulvinar dolor tempus feugiat id in orci."
    // };

    const newReview = review;
    dispatch({
        type: CREATE_REVIEW,
        newReview
    });
}

export const findAllTuits = async (dispatch) => {
    const tuits = await service.findAllTuits();
    dispatch({
        type: FIND_ALL_TUITS,
        tuits
    });
}