import express from "express"

const router = express.Router()
import {
  getRestaurants,
  getRestaurantById,
  deleteRestaurant,
  createRestaurant,
  updateRestaurant,
  createRestaurantReview,
  getTopRestaurants,
  getRecentReviewedRestaurants,
} from "../controllers/restaurantController.js"
import {
  authAdmin,
  authOwner,
  authToken,
} from "../middlewares/authMiddleware.js"

//router.route('/').get(getRestaurants).post(protect, admin, createRestaurant);
router.get("/top", getTopRestaurants)
router.get("/recent-reviewed", getRecentReviewedRestaurants)
router.route("/:id/reviews").post(authToken, createRestaurantReview)
router
  .route("/:id")
  .get(getRestaurantById)
  .delete(authToken, authOwner, deleteRestaurant)
  .put(authToken, authOwner, updateRestaurant)

export default router
