import { body } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

/**
 * @module validators/login
*/

/**
 * Function to validate the values in the request body
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @param {NextFunction} next - continue to the next middleware
*/
export async function loginBodyValidator (req: Request, res: Response, next: NextFunction) {
  try {
    const fields = [
      body('email')
      .exists()
      .withMessage('Required field')
      .normalizeEmail()
      .isEmail()
      .withMessage('Invalid email format'),
      body('password')
      .exists()
      .withMessage('Required field')
      .notEmpty()
      .withMessage('Field should not be empty'),
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
