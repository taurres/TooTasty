import express from 'express'
import {
  loginUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  likeRestaurant,
  unlikeRestaurant,
  getUserProfileById
} from '../controller/userController.js'
import { authToken } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/profile/:id').get(getUserProfileById)

// authenticate user by token before getting/updating user profile
router.route('/profile')
  .get(authToken, getUserProfile)
  .put(authToken, updateUserProfile)

router.route('/restaurant/:id')
  .delete(authToken, unlikeRestaurant)
  .put(authToken, likeRestaurant)


export default router