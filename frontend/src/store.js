import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import { reviewReducer } from './reducers/reviewReducer';
import {
  restaurantDetailsReducer,
  restaurantListReducer,
  restaurantRencentReviewedReducer,
} from './reducers/restaurantReducer';
import {
  userLikerestaurantReducer,
  userLoginReducer,
  userProfileReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './reducers/userReducer';

const reducer = combineReducers({
  reviews: reviewReducer,
  restaurantList: restaurantListReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  updateUserProfile: userUpdateProfileReducer,
  restaurantDetails: restaurantDetailsReducer,
  likeRestaurant: userLikerestaurantReducer,
  restaurantRecentReviewed: restaurantRencentReviewedReducer,
});

// get user data from local storage
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
