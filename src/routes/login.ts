import { Router } from 'express'
import { login } from '../controllers/login/'
import {
	loginBodyValidator
} from '../validators/login'
import {
	handleValidationError
} from '../validators/validation-error-handler'

/**
 * @module routes/login
*/

const router: Router = Router()

/**
 * Main function to control routing
*/
export default function() {
	router.post('/', 
	  loginBodyValidator,
	  handleValidationError,
		login
	)
	return router
}
