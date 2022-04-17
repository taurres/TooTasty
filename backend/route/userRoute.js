import express from 'express'
import {
  loginUser,
  getUserProfile,
  registerUser,
  updateUserProfile
} from '../controller/userController.js'
import { authAdmin, authToken } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser)

router.route('/login')
  .post(loginUser)

// authenticate user by token before getting/updating user profile
router.route('/profile')
  .get(authToken, getUserProfile)
  .put(authToken, updateUserProfile)


export default router