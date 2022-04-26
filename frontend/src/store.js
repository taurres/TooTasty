import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import reviewReducer from './reducers/reviewReducer'
import restaurantReducer from './reducers/restaurantReducer'
import profileReducer from './reducers/profileReducer'
import { userLoginReducer } from './reducers/userReducer'

const reducer = combineReducers({
  reviews: reviewReducer,
  restaurants: restaurantReducer,
  profile: profileReducer,
  userLogin: userLoginReducer,
})

// get user data from local storage
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store