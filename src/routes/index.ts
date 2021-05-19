import express from 'express'

import login from './login'
import jwt from './jwt'
import movies from './movie'
import tvshows from './tvshow'
import directors from './director'

/**
 * @module routes/index
*/

const app = express()

/**
 * Main function to control routing
*/
export default function () {
	app.use('/login', login())
	app.use('/jwt', jwt())
	app.use('/movies', movies())
	app.use('/tvshows', tvshows())
	app.use('/directors', directors())
	return app
}
