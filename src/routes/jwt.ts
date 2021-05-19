import { Router } from 'express'
import { refreshToken } from '../controllers/jwt'
import {
	jwtBodyValidator
} from '../validators/jwt'
import {
	handleValidationError
} from '../validators/validation-error-handler'

/**
 * @module routes/jwt
*/

const router: Router = Router()

/**
 * Main function to control routing
*/
export default function () {
	router.post('/refresh',
		jwtBodyValidator,
		handleValidationError,	
		refreshToken
	)
	return router
}
