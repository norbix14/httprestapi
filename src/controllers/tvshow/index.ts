import { Request, Response } from 'express'
import Tvshow from '../../models/TvShow'
import { parse } from 'search-params'

/**
 * @module controllers/tvshow
*/

/**
 * Function to find all the tv shows
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @returns {Promise}
*/
export async function findTvshows (req: Request,  res: Response) {
	try {
		const tvshows = await Tvshow.find({})
		res.status(200).json({
			msg: 'These are all the tv shows for you',
			tvshows
		})
	} catch (error) {
		res.status(500).json({
			msg: 'Error',
			error
		})
	}
}

/**
 * Function to find a specific tv show
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @returns {Promise}
*/
export async function findTvshow (req: Request, res: Response) {
	try {
		const { params } = req
		const { query } = params
		const q = parse(query)
		const { name, episode } = q
		const tvshow = await Tvshow.find(
			{
				name,
				'seasons.episodes.number': episode
			}
		).populate('director')
		res.status(200).json({
			msg: 'This is the episode',
			tvshow
		})
	} catch (error) {
		res.status(500).json({
			msg: 'Error',
			error
		})
	}
}

/**
 * Function to add a new tv show
 * 
 * @param {Request} req - user request
 * @param {Response} res - server response
 * @returns {Promise}
*/
export async function addTvshow (req: Request, res: Response) {
	try {
		const { body } = req
		const tvshow = new Tvshow(body)
		await tvshow.save()
		res.status(200).json({
			msg: 'Tv show added',
			tvshow
		})
	} catch (error) {
		res.status(500).json({
			msg: 'Error',
			error
		})
	}
}
