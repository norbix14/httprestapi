import { Request, Response } from 'express'
import { jwtSign } from '../../handlers/jwt-handler'

/**
 * @module controllers/login
*/

/**
 * Function to log the user
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @returns {void}
*/
export function login (req: Request,  res: Response) {
	const { body } = req
	const { email } = body
	const payload = {
		email
	}
	const token = jwtSign(payload)
	res.setHeader('Authorization', `Bearer ${token}`)
	res.status(200).json({
		msg: 'This is your token',
		token
	})
}
