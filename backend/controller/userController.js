import expressAsyncHandler from 'express-async-handler'
import User from '../model/userModel.js'
import generateToken from '../util/generateToken.js'

// @desc    register new suer
// @route   POST /api/users
// @access  public
export const registerUser = expressAsyncHandler(async (req, res) => {
  const {name, email, password, bio, location} = req.body
  const existUser = await User.findOne({email})

  // check if user exists
  if (existUser) {
    res.status(400)
    throw new Error('User already exists')
  }

  // if not exist, create a new user
  const user = await User.create({
    name,
    email,
    password,
    bio,
    location,
  })

  // response the new user data with token
  if (user) {
    res.status(201).json({
      ...formatUserResponse(user),
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Auth user and get token
// @route   POST /api/users/login
// @access  Public
export const loginUser = expressAsyncHandler(async (req, res) => {
  const {email, password} = req.body
  // find user by email
  const user = await User.findOne({email})

  // if user exists and password matches, return user data with token
  if (user && (await user.matchPassword(password))) {
    res.json({
      ...formatUserResponse(user),
      token: generateToken(user._id)
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Get user it
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = expressAsyncHandler(async (req, res) => {
  // req.user is defined in authMiddleware
  const user = await User.findById(req.user._id)
  if (user) {
    res.json(formatUserResponse(user))
  } else {
    res.status(401)
    throw new Error('User not found')
  }
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = expressAsyncHandler(async (req, res) => {
  // get user by id
  const user = await User.findById(req.user._id)
  // update the updated attributes
  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }
    user.bio = req.body.bio || user.bio
    user.location = req.body.location || user.location
    // save the updated user
    const updatedUser = await user.save()
    // return the updated user
    res.json(formatUserResponse(updatedUser))
  } else {
    res.status(401)
    throw new Error('User not found')
  }
})


const formatUserResponse = (user) => {
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
    bio: user.bio,
    location: user.location,
    likedRestaurant: {
      data: user.likedRestaurant,
      numLiked: user.likedRestaurant ? user.likedRestaurant.length : 0,
    },
    ownedRestaurant: user.ownedRestaurant,
  }
}
