import axios from 'axios';

import {
  RESTAURANT_DETAILS_FAIL,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
  RESTAURANT_RECENT_REVIEWED_FAIL,
  RESTAURANT_RECENT_REVIEWED_REQUEST,
  RESTAURANT_RECENT_REVIEWED_SUCCESS,
  RESTAURANT_CREATE_REVIEW_FAIL,
  RESTAURANT_CREATE_REVIEW_REQUEST,
  RESTAURANT_CREATE_REVIEW_SUCCESS,
  RESTAURANT_LIST_FAIL,
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
} from '../constants/restaurantConstants';
import { logout } from './userActions';

export const listRestaurants = (keyword = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: RESTAURANT_LIST_REQUEST });

    const { data } = await axios.get(
      `/api/restaurants?keyword=${keyword}&pageNumber=${pageNumber}`
    );

    dispatch({ type: RESTAURANT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RESTAURANT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listRestaurantDetails = (id) => async (dispatch) => {
  try {
    // fetching data
    dispatch({ type: RESTAURANT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/restaurants/${id}`);

    // fetch success
    dispatch({
      type: RESTAURANT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // fetch failed
    dispatch({
      type: RESTAURANT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createRestaurantReview = (restaurantId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: RESTAURANT_RECENT_REVIEWED_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.post(
      `/api/restaurants/${restaurantId}/reviews`,
      review,
      config
    );

    dispatch({
      type: RESTAURANT_CREATE_REVIEW_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === 'Not authorized, token failed') {
      dispatch(logout());
    }
    dispatch({
      type: RESTAURANT_CREATE_REVIEW_FAIL,
      payload: message,
    });
  }
};

export const listRecentReviewedRestaurants = () => async (dispatch) => {
  try {
    // fetching data
    dispatch({ type: RESTAURANT_RECENT_REVIEWED_REQUEST });
    const { data } = await axios.get(`/api/restaurants/recent-reviewed`);

    // fetch success
    dispatch({
      type: RESTAURANT_RECENT_REVIEWED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    // fetch failed
    dispatch({
      type: RESTAURANT_RECENT_REVIEWED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
