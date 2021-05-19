import { Schema, model, Types } from 'mongoose'

/**
 * @module models/TvShow
*/

const TvShowSchema = new Schema({
	name: {
		type: String,
		lowercase: true,
		trim: true
	},
	actors: [String],
	director: {
		type: Types.ObjectId,
		ref: 'Director'
	},
	seasons: [
		{
			season: {
				type: Number
			},
			episodes: [
				{
					director: {
						type: Types.ObjectId,
						ref: 'Director'
					},
					number: Number,
					name: String,
					duration: Number
				}
			]
		}
	]
})

export default model('Tvshow', TvShowSchema)
