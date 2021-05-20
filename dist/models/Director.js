"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DirectorSchema = new mongoose_1.Schema({
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
            type: mongoose_1.Types.ObjectId,
            ref: 'Movie'
        }
    ],
    tvshows: [
        {
            type: mongoose_1.Types.ObjectId,
            ref: 'Tvshow'
        }
    ]
});
exports.default = mongoose_1.model('Director', DirectorSchema);
//# sourceMappingURL=Director.js.map