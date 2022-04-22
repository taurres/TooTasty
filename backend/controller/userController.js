import expressAsyncHandler from 'express-async-handler'
import User from '../model/userModel.js'
import generateToken from '../util/generateToken.js'
import Restaurant from '../model/restaurantModel.js'

// @desc    register new suer
// @route   POST /api/users
// @access  public
export const registerUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, bio, location } = req.body
  const existUser = await User.findOne({ email })

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
      token: generateToken(user._id),
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
  const { email, password } = req.body
  // find user by email
  const user = await User.findOne({ email })

  // if user exists and password matches, return user data with token
  if (user && (await user.matchPassword(password))) {
    res.json({
      ...formatUserResponse(user),
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Get user profile
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

// @desc    Get user profile by id (only basic information)
// @route   GET /api/users/profile/:id
// @access  Public
export const getUserProfileById = expressAsyncHandler(async (req, res) => {
  // req.user is defined in authMiddleware
  const otherUser = await User.findById(req.params.id)
  if (otherUser) {
    res.json({
      _id: otherUser._id,
      name: otherUser.name,
      bio: otherUser.bio,
      location: otherUser.location,
    })
  } else {
    res.status(401)
    throw new Error('User not found')
  }
})

// @desc    like restaurant
// @route   PUT /api/users/restaurant/:id
// @access  Private
export const likeRestaurant = expressAsyncHandler(async (req, res) => {
  // get user by id
  const user = await User.findById(req.user._id)
  const restaurant = await Restaurant.findById(req.params.id)
  // update user liked list
  if (user && restaurant) {
    user.likedRestaurant.push({
      name: restaurant.name,
      image_url: restaurant.image_url,
      restaurant: restaurant._id,
    })
    const updatedUser = await user.save()
    res.json(formatUserResponse(updatedUser))
  } else if (!user) {
    res.status(401)
    throw new Error('User not found')
  } else if (!restaurant) {
    res.status(401)
    throw new Error('Restaurant not found')
  }
})

// @desc    unlike restaurant
// @route   DELETE /api/users/restaurant/:id
// @access  Private
export const unlikeRestaurant = expressAsyncHandler(async (req, res) => {
  // get user by id
  const user = await User.findById(req.user._id)
  const restaurant = await Restaurant.findById(req.params.id)
  // const restaurant = await Restaurant.findById(req.restaurant._id)
  // update user liked list
  if (user && restaurant) {
    user.likedRestaurant = user.likedRestaurant.filter(data => !data.restaurant.equals(restaurant._id))
    const updatedUser = await user.save()
    res.json(formatUserResponse(updatedUser))
  } else if (!user) {
    res.status(401)
    throw new Error('User not found')
  } else if (!restaurant) {
    res.status(401)
    throw new Error('Restaurant not found')
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
