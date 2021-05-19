import { Router } from 'express'
import {
	checkAuthorizationHeader,
	verifyToken
} from '../validators/jwt'
import {
	findDirectors,
	findDirector,
	addDirector
} from '../controllers/director/'

/**
 * @module routes/director
*/

const router: Router = Router()

/**
 * Main function to control routing
*/
export default function () {
	router.get('/', 
		checkAuthorizationHeader,
		verifyToken,
	  findDirectors
	)
	router.get('/:query', 
		checkAuthorizationHeader,
		verifyToken,
	  findDirector
	)
	router.post('/',
		checkAuthorizationHeader,
		verifyToken,
		addDirector
	)
	return router
}
