import createError from 'http-errors'
import {
	Request,
	Response,
	NextFunction,
} from 'express'
import { ErrorHttp } from '../interfaces/error.interface'

/**
 * @module handlers/custom-error-handler
*/

/**
 * Function to create a 404 - Not Found error
 *
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @param {NextFunction} next - continue to the next middleware
 * @returns {void}
*/
export const createNotFoundError = function (req: Request, res: Response, next: NextFunction): void {
	next(createError(404))
}

/**
 * Function to handle the 404 - Not Found error
 *
 * @param {ErrorHttp} err - error object
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @param {NextFunction} next - continue to the next middleware
 * @returns {void}
*/
export const handleNotFoundError = function (err: ErrorHttp, req: Request, res: Response, next: NextFunction): void {
  if (res.headersSent) {
    return next(err)
  }
  const error = {
    ...err,
    details: 'Resource not found',
    status: err.status || 500,
  }
  res.status(error.status).json(error)
}
