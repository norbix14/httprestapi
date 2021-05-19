import { Request, Response } from 'express'
import Director from '../../models/Director'
import { parse } from 'search-params'

/**
 * @module controllers/director
*/

/**
 * Function to find all directors
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @returns {Promise}
*/
export async function findDirectors (req: Request,  res: Response) {
	try {
		const directors = await Director.find({})
		res.status(200).json({
			msg: 'These are all the directors for you',
			directors
		})
	} catch (error) {
		res.status(500).json({
			msg: 'Error',
			error
		})
	}
}

/**
 * Function to find a specific director
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @returns {Promise}
*/
export async function findDirector (req: Request, res: Response) {
	try {
		const { params } = req
		const { query } = params
		const q = parse(query)
		const { name } = q
		const director = await Director.find({
			name
		})
		.sort({
			_id: 1
		})
		res.status(200).json({
			msg: 'This is the director',
			director
		})
	} catch (error) {
		res.status(500).json({
			msg: 'Error',
			error
		})
	}
}

/**
 * Function to add a new director
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @returns {Promise}
*/
export async function addDirector (req: Request, res: Response) {
	try {
		const { body } = req
		const director = new Director(body)
		await director.save()
		res.status(200).json({
			msg: 'Director added',
			director
		})
	} catch (error) {
		res.status(500).json({
			msg: 'Error',
			error
		})
	}
}
