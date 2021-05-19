import { validationResult } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

/**
 * @module validators/validation-error-handler
*/

/**
 * Function to handle validation errors
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @param {NextFunction} next - continue to the next middleware
 * @returns {void}
*/
export function handleValidationError (req: Request, res: Response, next: NextFunction) {
  const result = validationResult(req)
  if (result.isEmpty()) {
    return next()
  }

  const errors = result['errors']
  const prettyErrors: Object[] = []

  const getParam = (item: any) => item.param
  const getMsg = (item: any) => item.msg
  const getLocation = (item: any) => item.location

  const paramFields = errors.map(getParam)
  const uniqueParamFields = Array.from(new Set(paramFields))

  uniqueParamFields.forEach(param => {
    const err = errors.filter((item: any) => item.param === param)
    const messages = err.map(getMsg)
    const locations = err.map(getLocation)
    const location = Array.from(new Set(locations)).join(' ')
    prettyErrors.push({
      location,
      param,
      messages
    })
  })

  return res.status(400).json({
    message: 'Check all the fields are valid and completed',
    explanation: `Invalid fields: ${uniqueParamFields.join(', ')}`,
    details: {
      errors: prettyErrors
    }
  })
}
