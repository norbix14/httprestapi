import { Router } from 'express'
import {
	checkAuthorizationHeader,
	verifyToken
} from '../validators/jwt'
import {
	findTvshows,
	findTvshow,
	addTvshow
} from '../controllers/tvshow'

/**
 * @module routes/tvshow
*/

const router: Router = Router()

/**
 * Main function to control routing
*/
export default function () {
	router.get('/', 
		checkAuthorizationHeader,
		verifyToken,
	  findTvshows
	)
	router.get('/:query', 
		checkAuthorizationHeader,
		verifyToken,
	  findTvshow
	)
	router.post('/',
		checkAuthorizationHeader,
		verifyToken,
	  addTvshow
	)
	return router
}
