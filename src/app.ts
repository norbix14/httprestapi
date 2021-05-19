import dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import routes from './routes/'
import {
  createNotFoundError,
  handleNotFoundError
} from './handlers/custom-error-handler'
import MongoConn from './config/db'

dotenv.config()

/**
 * Module to set the app
 *
 * @module src/app
*/

// app setup
const app = express()

const uri = process.env.URI_MONGODB || ''

// mongodb connection
MongoConn(uri)

// morgan
app.use(logger('dev'))

// read json data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// cookie parser
app.use(cookieParser())

// cors policies
app.use(cors())

// routes
app.use('/api/v1/improvein', routes())

// catch 404 and forward to error handler
app.use(createNotFoundError)
// error handler
app.use(handleNotFoundError)

export default app
