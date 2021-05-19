"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const TvShowSchema = new mongoose_1.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true
    },
    actors: [String],
    director: {
        type: mongoose_1.Types.ObjectId,
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
                        type: mongoose_1.Types.ObjectId,
                        ref: 'Director'
                    },
                    number: Number,
                    name: String,
                    duration: Number
                }
            ]
        }
    ]
});
exports.default = mongoose_1.model('Tvshow', TvShowSchema);
//# sourceMappingURL=TvShow.js.map