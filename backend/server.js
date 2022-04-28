import express from 'express'
import dotenv from 'dotenv'
import connectDB from './utils/connectDB.js'
import { errorHandler, notFound } from './middlewares/errorMiddleware.js'
import userRoute from './routes/userRoutes.js'
import restaurantRoutes from './routes/restaurantRoutes.js'
import yelpSearchRoutes from './routes/yelpSearchRoutes.js'

dotenv.config()

connectDB()

const app = express()

// handle json body
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/users', userRoute)

app.use('/api/restaurants', restaurantRoutes)

app.use('/api/yelp', yelpSearchRoutes)

// if goes here, raise not found error
app.use(notFound)

// handle error
app.use(errorHandler)


const PORT = process.env.PORT || 4000

app.listen(PORT)