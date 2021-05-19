import { Request, Response } from 'express'
import Movies from '../../models/Movie'
import { parse } from 'search-params'

/**
 * @module controllers/movies
*/

/**
 * Function to find all the movies
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @returns {Promise}
*/
export async function findMovies (req: Request,  res: Response) {
	try {
		const movies = await Movies.find({})
		res.status(200).json({
			msg: 'These are all the movies for you',
			movies
		})
	} catch (error) {
		res.status(500).json({
			msg: 'Error',
			error
		})
	}
}

/**
 * Function to find a specific movie
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @returns {Promise}
*/
export async function findMovie (req: Request, res: Response) {
	try {
		const { params } = req
		const { query } = params
		const q = parse(query)
		const { name, sort } = q
		const movies = await Movies.find({
			name
		})
		.sort({
			_id: sort || -1
		})
		res.status(200).json({
			msg: 'These movies are for you',
			movies
		})
	} catch (error) {
		res.status(500).json({
			msg: 'Error',
			error
		})
	}
}

/**
 * Function to add a new movie
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @returns {Promise}
*/
export async function addMovie (req: Request, res: Response) {
	try {
		const { body } = req
		const movie = new Movies(body)
		await movie.save()
		res.status(200).json({
			msg: 'Movie added',
			movie
		})
	} catch (error) {
		res.status(500).json({
			msg: 'Error',
			error
		})
	}
}
