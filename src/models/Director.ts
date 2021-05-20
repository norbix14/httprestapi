import { Schema, model, Types } from 'mongoose'

/**
 * @module models/Director
*/

const DirectorSchema = new Schema({
	name: {
		type: String,
		lowercase: true,
		trim: true
	},
	lastname: {
		type: String,
		lowercase: true,
		trim: true
	},
	movies: [
		{
			type: Types.ObjectId,
			ref: 'Movie'
		}
	],
	tvshows: [
		{
			type: Types.ObjectId,
			ref: 'Tvshow'
		}
	]
})

export default model('Director', DirectorSchema)
