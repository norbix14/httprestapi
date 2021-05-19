"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MovieSchema = new mongoose_1.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true
    },
    actors: [String],
    director: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Director'
    }
});
exports.default = mongoose_1.model('Movie', MovieSchema);
//# sourceMappingURL=Movie.js.map