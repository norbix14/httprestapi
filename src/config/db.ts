import mongoose from 'mongoose'
import { ConnectOptions } from 'mongoose'
mongoose.Promise = global.Promise

import '../models/Actor'
import '../models/Director'
import '../models/Movie'
import '../models/TvShow'

/**
 * @module config/db
*/

/**
 * Function to connect DDBB
 * 
 * @param {string} uri - string connection to MongoDB
 * @param {ConnectOptions} options - configuration object
 * @returns {void}
*/
export default function (uri: string, options: ConnectOptions = {}): void {
  try {
    if (!uri || uri.length <= 0) {
      throw new Error('Invalid URI connection')
    }
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      ...options,
    }
    mongoose.connect(uri, opts)
    mongoose.connection.on('connected', () => console.log('MongoDB connected'))
    mongoose.connection.on('error', () => console.log('MongoDB fail to connect'))
  } catch (err) {
    console.log(err)
    console.log('Something wrong happened with MongoDB')
  }
}
