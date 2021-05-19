import { Schema, model, Types } from 'mongoose'

/**
 * @module models/Movie
*/

const MovieSchema = new Schema({
	name: {
		type: String,
		lowercase: true,
		trim: true
	},
	actors: [String],
	director: {
		type: Types.ObjectId,
		ref: 'Director'
	}
})

export default model('Movie', MovieSchema)
