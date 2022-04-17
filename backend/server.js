import express from 'express'
import dotenv from 'dotenv'
import connectDB from './util/connectDB.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import userRoute from './route/userRoute.js'

dotenv.config()

connectDB()

const app = express()

// handle json body
app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/users', userRoute)

// if goes here, raise not found error
app.use(notFound)

// handle error
app.use(errorHandler)


const PORT = process.env.PORT || 4000

app.listen(PORT)