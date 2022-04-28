import express from 'express';

const router = express.Router();
import {
  getRestaurants,
  getRestaurantById,
  deleteRestaurant,
  createRestaurant,
  updateRestaurant,
  createRestaurantReview,
  getTopRestaurants,
  getRecentReviewedRestaurants,
} from '../controllers/restaurantController.js';
import {
  authAdmin,
  authOwner,
  authToken,
} from '../middlewares/authMiddleware.js';
//import { protect, admin } from '../middleware/authMiddleware.js';

//router.route('/').get(getRestaurants).post(protect, admin, createRestaurant);
//router.route('/:id/reviews').post(protect, createRestaurantReview);
router.get('/top', getTopRestaurants);
router.get('/recent-reviewed', getRecentReviewedRestaurants);
router.route('/:id/reviews').post(createRestaurantReview);
router
  .route('/:id')
  .get(getRestaurantById)
  .delete(authToken, authOwner, deleteRestaurant)
  .put(authToken, authOwner, updateRestaurant);

export default router;
