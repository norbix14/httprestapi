import { body } from 'express-validator'
import { Request, Response, NextFunction } from 'express'
import { jwtVerify } from '../../handlers/jwt-handler'

/**
 * @module validators/jwt
*/

/**
 * Verify the existence of the Authorization header
 *
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @param {NextFunction} next - continue to the next middleware
*/
export function checkAuthorizationHeader (req: Request, res: Response, next: NextFunction) {
	const authorizationHeader = req.get('Authorization')
	if (!authorizationHeader) {
		return res.status(403).json({
			message: 'Access denied',
			explanation: `Missing Authorization Header`,
			details: {}
		})
	}
	next()
}

/**
 * Verify the given token
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @param {NextFunction} next - continue to the next middleware
*/
export function verifyToken (req: Request, res: Response, next: NextFunction) {
	const authorizationHeader = req.get('Authorization')
	const token = authorizationHeader && authorizationHeader.split(' ')[1] || ''
	try {
		const verifyToken = jwtVerify(token)
		if (verifyToken) {
			// do something if token es valid
		}
		next()
	} catch (error) {
		return res.status(500).json({
			message: 'Error with the given token',
			explanation: `Something wrong happened with the provided token`,
			details: {
				errors: [ error ]
			}
		})
	}	
}

/**
 * Function to validate the values in the request body
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @param {NextFunction} next - continue to the next middleware
*/
export async function jwtBodyValidator (req: Request, res: Response, next: NextFunction) {
  try {
    const fields = [
      body('email')
      .exists()
      .withMessage('Required field')
      .normalizeEmail()
      .isEmail()
      .withMessage('Invalid email format')
    ]
    await Promise.all(fields.map(field => field.run(req)))
    next()
  } catch (error) {
    return res.status(500).json({
      message: `Internal Error`,
      explanation: `Something bad happen`,
      details: {
        errors: [ error ]
      }
    })
  }
}
