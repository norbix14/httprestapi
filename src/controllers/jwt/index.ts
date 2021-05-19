import { Request, Response } from 'express'
import { jwtSign } from '../../handlers/jwt-handler'

/**
 * @module controllers/jwt
*/

/**
 * Function to refresh the jsonwebtoken
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
*/
export function refreshToken (req: Request, res: Response) {
	try {
		const { body } = req
		const { email } = body
		const payload = {
			email
		}
		const token = jwtSign(payload)
		res.setHeader('Authorization', `Bearer ${token}`)
		return res.status(200).json({
			msg: 'This is your token',
			token
		})
	} catch (error) {
		return res.status(500).json({
			msg: 'Error',
			error
		})
	}
}
