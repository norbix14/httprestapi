import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { Secret, SignOptions, VerifyOptions } from 'jsonwebtoken'
import { JwtPayload } from '../interfaces/jwt.interface'

dotenv.config()

/**
 * @module handlers/jwt-handler
*/

/**
 * Function to synchronously sign the given
 * payload into a JSON Web Token string
 * 
 * @param {JwtPayload | Object | String} payload - jwt payload
 * @param {SignOptions} options - options for the signature
 * @returns {string} the JSONWebToken string
*/
export function jwtSign(payload: JwtPayload | Object | String, options: SignOptions = {}): string {
	const secret: Secret = process.env.JWT_SECRET || 't3MP0Rarys3cr37'
	const opts = {
    expiresIn: '1h',
    ...options
  }
	const signed = jwt.sign(payload, secret, opts)
	return signed
}

/**
 * Function to synchronously verify the given
 * token using a secret or a public key to get
 * a decoded token
 * 
 * @param {string} token - JWT string to verify
 * @param {VerifyOptions} opts - options for the verification
 * @returns {string | object} the decoded token
*/
export function jwtVerify(token: string, opts: VerifyOptions = {}): string | object {
	const secret: Secret = process.env.JWT_SECRET || 't3MP0Rarys3cr37'
	const decoded = jwt.verify(token, secret, opts)
	return decoded
}
