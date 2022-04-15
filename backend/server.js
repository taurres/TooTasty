import express from 'express'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

// handle json body
app.use(express.json())

// handle 404
app.use(notFound)

// handle 500
app.use(errorHandler)


const PORT = process.env.PORT || 4000

app.listen(PORT)