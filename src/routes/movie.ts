import { Router } from 'express'
import {
	checkAuthorizationHeader,
	verifyToken
} from '../validators/jwt'
import {
	addMovie,
	findMovies,
	findMovie
} from '../controllers/movies'

/**
 * @module routes/movie
*/

const router: Router = Router()

/**
 * Main function to control routing
*/
export default function () {
	router.get('/', 
		checkAuthorizationHeader,
		verifyToken,
	  findMovies
	)
	router.get('/search/:query', 
		checkAuthorizationHeader,
		verifyToken,
	  findMovie
	)
	router.post('/',
		checkAuthorizationHeader,
		verifyToken,
		addMovie
	)
	return router
}
